import React, { createContext, FC, useEffect, useState } from "react";

import api from "./api";
import { Context, Filter, Product, Sort, Status } from "./types";

const AppContext = createContext({} as Context);

const AppProvider: FC = ({ children }) => {
  //
  const [status, setStatus] = useState<Status>("idle");
  const [sort, setSort] = useState<Sort>("recent");
  const [filter, setFilter] = useState<Filter>("All products");
  const [categories, setCategories] = useState<string[]>(["Loading..."]);
  const [products, setProducts] = useState<Product[]>([]);
  const [rawProducts, setRawProducts] = useState<Product[]>([]);

  const handleSetFilter = (_filter: string) => setFilter(_filter);

  const handleSetSort = (_sort: Sort) => setSort(_sort);

  useEffect(() => {
    // Inital state
    setStatus("loading");
    api
      .getProducts()
      .then((res) => {
        setCategories(
          ["All products", ...res.map((p: Product) => p.category)].reduce(
            (prev, curr) => {
              if (!prev.includes(curr)) {
                return [...prev, curr];
              }
              return prev;
            },
            [],
          ),
        );
        setRawProducts(res);
        setStatus("ready");
      })
      .catch((_) => setStatus("error"));
  }, []);

  useEffect(() => {
    const cloneProducts = [...rawProducts]
      .filter((p) =>
        filter === "All products"
          ? p
          : p.category.toLowerCase() === filter.toLowerCase(),
      )
      .sort((a, b) => {
        switch (sort) {
          case "highest":
            return b.cost - a.cost;
          case "lowest":
            return a.cost - b.cost;
          default:
            return 0;
        }
      });
    setProducts(cloneProducts);
  }, [rawProducts, filter, sort]);

  const state = {
    status,
    sort,
    filter,
    categories,
    products,
  };
  const actions = {
    handleSetFilter,
    handleSetSort,
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext as default };
