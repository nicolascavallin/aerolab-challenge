import styled from "styled-components";

type Variant = "L1" | "L1-Caps" | "L1-Light" | "L2" | "L2-Caps";

interface TextProps {
  variant?: Variant;
  numberOfLines?: number;
  noLineHeight?: boolean;
}

const Text = styled.p`
  margin: 0px;
  font-family: Montserrat;
  font-size: ${(props: TextProps) =>
    props.variant?.includes("L2") ? "14px" : "18px"};
  text-transform: ${(props: TextProps) =>
    props.variant?.includes("Caps") ? "uppercase" : "none"};
  font-weight: ${(props: TextProps) =>
    props.variant === "L1-Light" ? "500" : "600"};
  line-height: ${(props: TextProps) =>
    props.noLineHeight ? "normal" : "150%"};
  letter-spacing: ${(props) => {
    const size = props.variant?.includes("L2") ? 14 : 18;
    let factor = 0;
    if (props.variant === "L1-Caps") factor = 0.24;
    if (props.variant === "L2-Caps") factor = 0.05;
    return `${size * factor}px`;
  }};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.neutral[900]};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) =>
    props.numberOfLines ? props.numberOfLines : 0};
  overflow: hidden;
  word-break: break-all;
  @media screen and (max-width: 1024px) {
    font-size: ${(props: TextProps) =>
      props.variant?.includes("L2") ? "12px" : "16px"};
    letter-spacing: ${(props) => {
      const size = props.variant?.includes("L2") ? 12 : 16;
      let factor = 0;
      if (props.variant === "L1-Caps") factor = 0.24;
      return `${size * factor}px`;
    }};
  }
`;

export default Text;
