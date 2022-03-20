import type { NextPage } from "next";

import Wrapper from "../src/components/Layout/Wrapper";
import ProductsSection from "../src/components/Products";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <ProductsSection />
    </Wrapper>
  );
};

export default Home;
