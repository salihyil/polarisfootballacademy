import PropTypes from "prop-types";

type Props = {
  as?: "div";
  children: React.ReactNode;
  className: string;
};

const propTypes = {
  as: PropTypes.elementType,
};

const CardText = ({ children, className, as: Component = "div", ...props }: Props) => {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

CardText.displayName = "CardText";
CardText.propTypes = propTypes;

export default CardText;
