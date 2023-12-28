import Image, { ImageProps } from "next/image";
import PropTypes from "prop-types";
import * as React from "react";

export interface CardImgProps extends React.ImgHTMLAttributes<HTMLImageElement>, ImageProps {
  as?: typeof Image;
  width: number;
  height: number;
  src: string;
  alt: string;
}

const propTypes = {
  as: PropTypes.elementType,
};

const CardImg = ({ className, as: Component = Image, ...props }: CardImgProps) => {
  return <Component priority className={className} {...props} />;
};

CardImg.displayName = "CardImg";
CardImg.propTypes = propTypes;

export default CardImg;
