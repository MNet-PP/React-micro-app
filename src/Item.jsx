import React from "react";
import ShopItemFunc from "./ShopItemFunc";
//import PropTypes from "prop-types"

export default class Item extends React.Component {
  constructor(item) {
    super();
    this.brand = item.brand;
    this.title = item.title;
    this.description = item.description;
    this.descriptionFull = item.descriptionFull;
    this.price = item.price;
    this.currency = item.currency;
  }
  render() {
    return (
      <ShopItemFunc
        brand = {this.brand}
        title = {this.title}
        description ={this.description}
        descriptionFull = {this.descriptionFull}
        price = {this.price}
        currency = {this.currency}
      />
    );
  }
}

//Item.propTypes ={
// optionalString: PropTypes.string,
// optionalNumber: PropTypes.number,
//}
