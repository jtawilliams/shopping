import React from 'react';

const CartItem = (props) => {

    var items= props.products.map(item => {
      return(
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{props.name}</div>
          <div className="col-md-2">{props.price}</div>
          <div className="col-md-2">{props.quantity}</div>
        </div>
      </div>

      )
    })
return (
  <div className="collection-item">
    { items }
  </div>
)
}


export default CartItem;
