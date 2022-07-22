const initialState = {
  productImage: '',
  productStore: '',
  productName: '',
  productPrice: '',
};

const ProductInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_CLICK':
      return {
        ...state,
        productImage: action.productImage,
        productStore: action.productStore,
        productName: action.productName,
        productPrice: action.productPrice,
      };
    default:
      return state;
  }
};

export default ProductInfoReducer;
