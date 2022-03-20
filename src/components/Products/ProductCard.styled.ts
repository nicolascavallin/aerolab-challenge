import styled from "styled-components";

export const ProductWrapper = styled.div`
  transition: transform 0.35s ease;
  &:hover {
    transform: scale(1.015);
    > * {
      &:first-child {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
      }
    }
  }
`;

export const ProductData = styled.div`
  border-radius: 16px;
  border: solid 1px ${(props) => props.theme.colors.neutral[300]};
  transition: box-shadow 0.25s ease;
  backdrop-filter: blur(8px);
`;

export const ImageContainer = styled.div`
  aspect-ratio: 1;
  padding: 24px;
`;

export const ProductName = styled.div`
  border-top: solid 1px ${(props) => props.theme.colors.neutral[300]};
  padding: 16px 24px 24px 24px;
`;

export const RedeemButton = styled.button`
  margin-top: 16px;
  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  border-radius: 16px;
  padding: 16px;
  width: 100%;
  border: none;
  cursor: pointer;
  &:hover {
    background: linear-gradient(102.47deg, #1667d9 -5.34%, #f279f2 106.58%);
  }
  &:active {
    opacity: 0.8;
  }
`;
