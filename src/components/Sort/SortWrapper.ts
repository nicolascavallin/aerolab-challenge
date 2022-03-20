import styled from "styled-components";

const SortWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  position: relative;
  gap: 12px;
  align-items: center;
  @media screen and (max-width: 1400px) {
    > * {
      &:first-child {
        display: none;
      }
    }
  }
`;

export default SortWrapper;
