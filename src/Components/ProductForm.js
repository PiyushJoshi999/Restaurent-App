import React, {useState} from 'react';
import './ProductForm.css';

const ProductForm = (props) => {

  const [productId, setProductId] = useState('');
  const [productIdError, setProductIdError] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [sellingPriceError, setSellingPriceError] = useState('');
  const [productName, setProductName] = useState('');
  const [productNameError, setProductNameError] = useState('');

  const idChangeHandler = (event) => {
    setProductId(event.target.value);
    setProductIdError('');
  }

  const nameChangeHandler = (event) => {
    setProductName(event.target.value);
    setProductNameError('');
  }

  const priceChangeHandler = (event) => {
    setSellingPrice(event.target.value);
    setSellingPriceError('');
  }

  const submitHandler = (event) => {
    event.preventDefault();

    let valid = true;
    
    if(productName.trim() === ''){
      setProductNameError('Please enter the product name.');
      valid = false;
    }

    if (productId.trim() === '' || isNaN(productId) || productId.length > 5) {
      setProductIdError('Please enter a valid product ID (up to 5 digits).');
      valid = false;
    }

    if (sellingPrice.trim() === '' || isNaN(sellingPrice) || sellingPrice.length > 8) {
      setSellingPriceError('Please enter a valid selling price (up to 8 digits).');
      valid = false;
    }

    let productData = null;


    if(valid){
       productData = {
        id : productId,
        productName : productName,
        sellingPrice : sellingPrice,
      };
    }

    props.onAddProduct(productData);

    setProductId('');
    setProductName('');
    setSellingPrice('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='my-form'>
        <div className='my-form__productid'>
          <label>Product Id: </label>
          <input type = 'number' 
                 value = {productId}
                 onChange={idChangeHandler}
          ></input>
           {productIdError && <p className='error'>{productIdError}</p>}
        </div>
        <div className='my-form__name'>
          <label>Product Name: </label>
          <input type = 'text' 
                 value = {productName}
                 onChange = {nameChangeHandler}
          ></input>
            {productNameError && <p className='error'>{productNameError}</p>}
        </div>
        <div className='my-form__price'>
          <label>Selling Price: </label>
          <input type = 'number' 
                 value = {sellingPrice}
                 onChange = {priceChangeHandler}
          ></input>
           {sellingPriceError && <p className='error'>{sellingPriceError}</p>}
        </div>
        <div className='my-form__action'>
            <button type='submit'>Add Product</button>
        </div>
      </div>
    </form>
  );
  
}
export default ProductForm;