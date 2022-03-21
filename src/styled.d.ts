// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      neutral: {
        900: string;
        600: string;
        500: string;
        300: string;
        200: string;
        100: string;
        0: string;
      };
      brand: {
        light: string;
        light2: string;
      };
    };
  }
}
