export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';
import Product from "../../models/product";


export const deleteProduct = productId => {
  return async dispatch => {
    await fetch(
      `https://seniorprojectjavacafe-default-rtdb.firebaseio.com/products/${productId}.json`,
      {
        method: 'DELETE'
      }
    );
    dispatch({ type: DELETE_PRODUCT, pid: productId });
  };
};


export const fetchProducts = () => {
  return async dispatch => {
    const response = await fetch(
      'https://seniorprojectjavacafe-default-rtdb.firebaseio.com/products.json'
    );
    const resData = await response.json();
    const loop = [];

    for (const id in resData) {
      loop.push(
        new Product(
        id,
        resData[id].prodId,
        resData[id].title,
        resData[id].imageUrl,
        resData[id].description,
        resData[id].price
        )
      );

    }

    dispatch({ type: SET_PRODUCTS, products: loop });
  };
};


export const createProduct = (title, description, imageUrl, price) => {
  return async dispatch => {
    const response = await fetch('https://seniorprojectjavacafe-default-rtdb.firebaseio.com/products.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        imageUrl,
        price
      })
    });
    const resData = await response.json();
    dispatch({
    type: CREATE_PRODUCT,
    productData: {
      id: resData.name,
      title,
      description,
      imageUrl,
      price
      }
    });
  };
};

export const updateProduct = (id, title, description, imageUrl) => {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title,
      description,
      imageUrl,
    }
  };
};
