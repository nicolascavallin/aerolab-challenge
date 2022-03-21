import styled from "styled-components";

interface Props {
  selected?: boolean;
}

const Sort = styled.button<Props>`
  background: ${(props) =>
    props.selected
      ? "linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%)"
      : props.theme.colors.brand.light};
  border-radius: 12px;
  padding: 8px 24px;
  width: auto;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.selected
        ? "linear-gradient(102.47deg, #1667d9 -5.34%, #f279f2 106.58%)"
        : props.theme.colors.brand.light2};
  }
  &:active {
    opacity: 0.8;
  }
`;

export default Sort;
