import React from "react";


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
     
   }


}