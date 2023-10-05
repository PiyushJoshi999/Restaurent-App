// import React, {useState, Fragment} from 'react';

// import ProductForm from './ProductForm';
// import ProductItem from './ProductItem';

// const NewProduct = () => {

//     const [addedProducts, setAddedProducts] = useState([]);

//     const addProductHandler = (newProduct) => {
//         setAddedProducts((prevProducts) => [...prevProducts, newProduct]);
//       };

// return (
//     <Fragment>
//          <ProductForm onAddProduct={addProductHandler} />
//          <h2>Available Products:</h2>
//          {addedProducts.map((product, index) => (
//         <ProductItem key={index}
//          productData={product}
//          onDeleteProduct={handleDeleteProduct}
//          />
//       ))}
//     </Fragment>
   
// );

// }

// export default NewProduct;

// import React, { useState, Fragment } from 'react';
// import ProductForm from './ProductForm';
// import ProductItem from './ProductItem';

// const NewProduct = () => {
//   const [addedProducts, setAddedProducts] = useState([]);

//   const handleAddProduct = (productData) => {
//     setAddedProducts((prevProducts) => [...prevProducts, productData]);
//     localStorage.setItem('products', JSON.stringify(addedProducts));
//   };

//   const handleDeleteProduct = (productId) => {
//     const updatedProducts = addedProducts.filter(
//       (product) => product.id !== productId
//     );
//     setAddedProducts(updatedProducts);
//     localStorage.setItem('products', JSON.stringify(updatedProducts));
//   };

//   return (
//     <Fragment>
//       <ProductForm onAddProduct={handleAddProduct} />
//       <h2>Available Products:</h2>
//       {addedProducts.map((product) => (
//         <ProductItem
//           key={product.id}
//           productData={product}
//           onDeleteProduct={handleDeleteProduct}
//         />
//       ))}
//     </Fragment>
//   );
// };

// export default NewProduct;

import React, { useState, useEffect, Fragment } from 'react';
import ProductForm from './ProductForm';
import ProductItem from './ProductItem';

const NewProduct = () => {
  const [addedProducts, setAddedProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setAddedProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    updateTotalValue();
  }, [addedProducts]);

  const updateTotalValue = () => {
    let sum = 0;
    addedProducts.forEach((product) => {
      sum += parseInt(product.sellingPrice);
    });
    setTotalValue(sum);
  };

  const handleAddProduct = (productData) => {
    setAddedProducts((prevProducts) => [...prevProducts, productData]);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = addedProducts.filter(
      (product) => product.id !== productId
    );
    setAddedProducts(updatedProducts);
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(addedProducts));
  }, [addedProducts]);

  return (
    <Fragment>
      <ProductForm onAddProduct={handleAddProduct} />
      <div>
        Total value worth of products is __Rs. {totalValue}
      </div>
      <div>
        <h2>Available Products:</h2>
      </div>
      {addedProducts.map((product) => (
        <ProductItem
          key={product.id}
          productData={product}
          onDeleteProduct={handleDeleteProduct}
        />
      ))}
    </Fragment>
  );
};

export default NewProduct;
