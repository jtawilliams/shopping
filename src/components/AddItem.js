import React from 'react';

class AddItem extends React.Component{
  render() {
       var productList = this.props.products.map(product => {
         return (
           <option key={product.name} price={product.priceInCents}>
             {product.name}
           </option>
         );
       });
    return (
     <div>
      <div className="grandtotal">
        <h2>Grand Total: </h2>
        <h2>${(this.props.total / 100).toFixed(2)}</h2>
      </div>
       <form>
         <h2>Quantity</h2>
         <input
           type="number"
           className="pNumber"
           name="quantity"
           min="0"
           max="10"
           onChange={e => this.props.changeQuantity(e.target.value)}
         />
         <h2>Products</h2>
         <select
           className="nProducts"
           onChange={e => this.props.grabThis(e.target.value)}
         >
           {productList}
         </select>
         <button
           type="submit"
           className="btn btn-primary"
           onClick={this.props.submit}
         >
           {" "}
           Submit{" "}
         </button>
       </form>
     </div>
    )
  }
}

export default AddItem;
