export type TStore = {
  shoppingCart: TShoppingCart;
  itemsSlice: {
    items: [
      {
        count: string;
        description: string;
        id: number;
        imageUrl: string;
        price: string;
        salesType: string;
        title: string;
        type: string;
      }
    ];
  };
  loginSlice: { login: boolean };
  userDataSlice: { userData: {}[] };
};

export type TShoppingCart = {
  cart: {
    count: string;
    description: string;
    id: number;
    imageUrl: string;
    price: string;
    salesType: string;
    title: string;
    type: string;
  }[];
};
