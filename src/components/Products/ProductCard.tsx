import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";
import { useTheme } from "styled-components";

import { Product } from "../../context/types";
import Text from "../Typography/Text";
import {
  ImageContainer,
  ProductData,
  ProductName,
  ProductWrapper,
  RedeemButton,
} from "./ProductCard.styled";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: FC<ProductCardProps> = ({ product, index = 0 }) => {
  //
  const theme = useTheme();

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      layout
      key={product._id}
    >
      <ProductWrapper>
        <ProductData>
          <ImageContainer>
            <Image
              src={product.img.hdUrl}
              objectFit="contain"
              layout="responsive"
              height="100%"
              width="100%"
              alt="Image of the product"
              loading="lazy"
              placeholder="blur"
              blurDataURL={product.img.url}
            />
          </ImageContainer>
          <ProductName>
            <Text numberOfLines={1}>{product.name}</Text>
            <Text
              // @ts-ignore
              color={theme.colors.neutral[600]}
              variant="L2-Caps"
              numberOfLines={1}
            >
              {product.category}
            </Text>
          </ProductName>
        </ProductData>
        <div>
          <RedeemButton>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text noLineHeight as="span" color="white">
                Redeem for&nbsp;
              </Text>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/aerolab-money.svg" alt="" />
              <Text noLineHeight as="span" color="white">
                &nbsp;{Intl.NumberFormat().format(product.cost)}
              </Text>
            </div>
          </RedeemButton>
        </div>
      </ProductWrapper>
    </motion.div>
  );
};

export default ProductCard;
