import PropTypes from "prop-types";
import * as React from "react";

type Props = {
  as?: "div";
  className: string;
  children: React.ReactNode;
};

const propTypes = {
  as: PropTypes.elementType,
};

const CardTitle = ({ children, className, as: Component = "div", ...props }: Props) => {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

CardTitle.displayName = "CardTitle";
CardTitle.propTypes = propTypes;

export default CardTitle;
