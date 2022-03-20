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
      <Button>-</Button>
      {/* @ts-ignore */}
      <Text color={theme.colors.neutral[600]}>
        Page <Span>1 of 2</Span>
      </Text>
      <Button>+</Button>
    </PaginatorWrapper>
  );
};

export default Paginator;
