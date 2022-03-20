import styled from "styled-components";

const ProductsGrid = styled.div`
  margin: 32px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 684px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 564px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default ProductsGrid;
