import styled from "styled-components";

const Sort = styled.button`
  background: ${(props: { selected: boolean }) =>
    props.selected
      ? "linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%)"
      : "#E6F0FF"};
  border-radius: 12px;
  padding: 8px 24px;
  width: auto;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${(props: { selected: boolean }) =>
      props.selected
        ? "linear-gradient(102.47deg, #1667d9 -5.34%, #f279f2 106.58%)"
        : "#E6F0FFCC"};
  }
  &:active {
    opacity: 0.9;
  }
`;

export default Sort;
