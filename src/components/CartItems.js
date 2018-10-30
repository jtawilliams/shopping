import React from 'react';

class CartItems extends React.Component{

  render() {
    console.log(this.props.list)
    return (
      <div className="container">
        <h1>Items</h1>
        <div class="collection-item">
        <div class="row">
        <div class="col-md-8">Mediocre Iron Watch</div>
        <div class="col-md-2">$3.99</div>
        <div class="col-md-2">1</div>
        </div>
      </div>
      <div class="collection-item">
        <div class="row">
          <div class="col-md-8">Heavy Duty Concrete Plate</div>
          <div class="col-md-2">$4.99</div>
          <div class="col-md-2">2</div>
        </div>
      </div>
      <div class="collection-item">
        <div class="row">
          <div class="col-md-8">Intelligent Paper Knife</div>
          <div class="col-md-2">$19.99</div>
          <div class="col-md-2">1</div>
        </div>
      </div>


      </div>
    )
  }
}

export default CartItems;
