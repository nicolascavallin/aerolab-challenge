import styled from "styled-components";

const SelectWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  position: relative;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 1400px) {
    > * {
      &:first-child {
        display: none;
      }
    }
  }
`;

export default SelectWrapper;
