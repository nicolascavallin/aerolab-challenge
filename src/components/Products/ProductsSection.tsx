import { AnimatePresence } from "framer-motion";
import React, { ChangeEvent, FC } from "react";
import { useTheme } from "styled-components";

import useApp from "../../context/hook";
import { Sort as SortType, SortOptions } from "../../context/types";
import ProductsContainer, {
  ProductsTopContainer,
} from "../Layout/ProductsContainer";
import ProductsGrid from "../Layout/ProductsGrid";
import Paginator from "../Paginator";
import Select, { SelectArrow, SelectWrapper } from "../Select";
import Sort, { SortWrapper } from "../Sort";
import Heading from "../Typography/Heading";
import Span from "../Typography/Span";
import Text from "../Typography/Text";
import ProductCard from "./ProductCard";
import { Separator } from "./ProductsSection.styled";

interface ProductsSectionProps {}

const ProductsSection: FC<ProductsSectionProps> = ({ children }) => {
  //
  const theme = useTheme();

  const { products, categories, sort, handleSetFilter, handleSetSort } =
    useApp();

  const onChangeFilter = (e: ChangeEvent<HTMLSelectElement>) =>
    handleSetFilter(e.target.value);

  const onChangeSort = (_sort: SortType) => handleSetSort(_sort);

  return (
    <ProductsContainer>
      <Heading variant="L2">
        <Span>Tech</Span> Products
      </Heading>
      <ProductsTopContainer>
        <SelectWrapper>
          {/* @ts-ignore */}
          <Text color={theme.colors.neutral[600]}>Filter by:</Text>
          <Select onChange={onChangeFilter}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Select>
          <SelectArrow>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="./dropdown.svg" alt="" />
          </SelectArrow>
        </SelectWrapper>
        <Separator />
        <SortWrapper>
          {/* @ts-ignore */}
          <Text color={theme.colors.neutral[600]}>Sort by:</Text>
          {SortOptions.map((opt) => (
            <Sort
              onClick={() => onChangeSort(opt.key)}
              key={opt.key}
              selected={opt.key === sort}
            >
              <Text noLineHeight as="span" color="white">
                {opt.key === sort ? opt.text : <Span>{opt.text}</Span>}
              </Text>
            </Sort>
          ))}
        </SortWrapper>
        <div style={{ flex: 1 }} />
        <Paginator />
      </ProductsTopContainer>
      <AnimatePresence>
        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard index={index} product={product} key={product._id} />
          ))}
        </ProductsGrid>
      </AnimatePresence>
    </ProductsContainer>
  );
};

export default ProductsSection;
