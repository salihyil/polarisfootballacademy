import PropTypes from "prop-types";
import * as React from "react";

type Props = {
  as?: "div";
  children: React.ReactNode;
  className: string;
};
const propTypes = {
  as: PropTypes.elementType,
};

const CardBody = ({ className, as: Component = "div", children, ...props }: Props) => {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

CardBody.displayName = "CardBody";
CardBody.propTypes = propTypes;

export default CardBody;
