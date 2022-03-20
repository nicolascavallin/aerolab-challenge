export interface Context {
  state: {
    status: Status;
    filter: Filter;
    sort: Sort;
    categories: string[];
    products: Product[];
  };
  actions: {
    handleSetFilter: (_filter: string) => void;
    handleSetSort: (_sort: Sort) => void;
  };
}

export type Status = "idle" | "loading" | "ready" | "error";

export type Filter = "all" | string;

export type Sort = "recent" | "highest" | "lowest";

export const SortOptions: { key: Sort; text: string }[] = [
  {
    key: "recent",
    text: "Most Recent",
  },
  {
    key: "lowest",
    text: "Lowest Price",
  },
  {
    key: "highest",
    text: "Highest Price",
  },
];

export interface Product {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  };
}
