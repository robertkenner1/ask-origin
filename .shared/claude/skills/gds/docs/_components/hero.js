import { Flex } from "@grammarly/design-system";
import React from "react";

const Hero = ({ path, altText, isUtility }) => (
  <Flex
    width="100%"
    bgColor={isUtility ? "background-base-subdued" : "green-60"}
    borderRadius={2}
    justify="center"
    className="heroHeader"
  >
    <img src={path} alt={altText} />
  </Flex>
);

export default Hero;
