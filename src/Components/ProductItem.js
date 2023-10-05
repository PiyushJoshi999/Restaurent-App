// import React from 'react';

// const ProductItem = (props) => {

//     return (
//         <div>
//             <div>Product Name: {props.productData.productName}</div>
//             <div>Selling Price: {props.productData.sellingPrice}</div>
//         </div>
//     );

// }

// export default ProductItem;

import React from 'react';

const ProductItem = ({ productData, onDeleteProduct }) => {
  const { id, productName, sellingPrice } = productData;

  const handleDelete = () => {
    onDeleteProduct(id);
  };

  return (
    <div>
      <div>Product Name: {productName}</div>
      <div>Selling Price: {sellingPrice}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductItem;
