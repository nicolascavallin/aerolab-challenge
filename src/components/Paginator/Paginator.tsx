import React, { FC } from "react";
import { useTheme } from "styled-components";

import Span from "../Typography/Span";
import Text from "../Typography/Text";
import { Button, PaginatorWrapper } from "./Paginator.styled";

interface PaginatorProps {}

const Paginator: FC<PaginatorProps> = ({ children }) => {
  //
  const theme = useTheme();

  return (
    <PaginatorWrapper>
      <Button aria-label="Previous page">
        <img alt="" src="/chevron-left.svg" />
      </Button>
      {/* @ts-ignore */}
      <Text color={theme.colors.neutral[600]}>
        Page <Span>1 of 2</Span>
      </Text>
      <Button aria-label="Next page">
        <img alt="" src="/chevron-right.svg" />
      </Button>
    </PaginatorWrapper>
  );
};

export default Paginator;
