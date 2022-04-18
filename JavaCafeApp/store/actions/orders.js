export const ADD_ORDER = 'ADD_ORDER';
export const addOrder = (cartItems, totalAmount) => 
{
  return async dispatch => 
  {
    const date = new Date();
    const response = await fetch(
      'https://seniorprojectjavacafe-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          date: date.toISOString()
        })
      }
    );
    const resData = await response.json();
    dispatch({
      type: ADD_ORDER,
      orderData: {
        id: resData.name,
        items: cartItems,
        amount: totalAmount,
        date: date
      }
    });
  };
};