import PropTypes from "prop-types";
import * as React from "react";

type Props = {
  as?: "div";
  className: string;
  title: string;
};

const propTypes = {
  as: PropTypes.elementType,
};

const CardTitle = ({ title, className, as: Component = "div", ...props }: Props) => {
  return <Component title={title} className={className} {...props} />;
};

CardTitle.displayName = "CardTitle";
CardTitle.propTypes = propTypes;

export default CardTitle;
