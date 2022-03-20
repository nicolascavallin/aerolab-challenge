import styled from "styled-components";

const Select = styled.select`
  font-family: Montserrat;
  background: transparent;
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.colors.neutral[600]};
  padding: 16px 32px 16px 24px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.neutral[300]};
  appearance: none;
  transition: all 0.5s ease-out;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

export default Select;
