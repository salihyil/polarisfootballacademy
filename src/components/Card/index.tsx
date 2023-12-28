import PropTypes from "prop-types";
import * as React from "react";
import CardBody from "./CardBody";
import CardImg from "./CardImg";
import CardText from "./CardText";
import CardTitle from "./CardTitle";

type Props = {
  as?: "div";
  children: React.ReactNode;
  className: string;
};

const propTypes = {
  as: PropTypes.elementType,
};

const Card = ({ className, as: Component = "div", children, ...props }: Props) => {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

Card.propTypes = propTypes;

export default Object.assign(Card, {
  Img: CardImg,
  Title: CardTitle,
  Body: CardBody,
  Text: CardText,
});

/*export default Card;

 Card.Img = CardImg;
Card.Body = CardBody;
Card.Title = CardTitle; */
