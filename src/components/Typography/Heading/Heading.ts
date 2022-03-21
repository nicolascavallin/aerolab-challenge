import styled from "styled-components";

type Variant = "L1" | "L2" | "L3";

interface HeadingProps {
  variant?: Variant;
}

const Heading = styled.h1<HeadingProps>`
  font-family: Montserrat;
  font-size: ${(props) => {
    switch (props.variant) {
      case "L2":
        return "48px";
      case "L3":
        return "32px";
      default:
        return "200px";
    }
  }};
  text-transform: uppercase;
  line-height: ${(props) => {
    switch (props.variant) {
      case "L3":
        return "100%";
      default:
        return "80%";
    }
  }};
  font-weight: 900;
  letter-spacing: 0px;
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.neutral[900]};
  @media screen and (max-width: 1024px) {
    font-size: ${(props) => {
      switch (props.variant) {
        case "L2":
          return "32px";
        case "L3":
          return "24px";
        default:
          return "96px";
      }
    }};
  }
`;

export default Heading;
