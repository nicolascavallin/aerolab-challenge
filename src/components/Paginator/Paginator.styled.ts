import styled from "styled-components";

export const PaginatorWrapper = styled.div`
  display: flex;
  border-radius: 16px;
  padding: 12px 16px;
  border: 1px solid ${(props) => props.theme.colors.neutral[300]};
  gap: 24px;
  align-items: center;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background: ${(props) => props.theme.colors.brand.light};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: auto;
  &:hover {
    background: ${(props) => props.theme.colors.brand.light2};
  }
  &:active {
    opacity: 0.8;
  }
`;
