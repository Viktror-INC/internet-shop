export const getFullPrice = (items: { price: string }[]) => {
  let itemPrice = 0;
  items.map((item) => {
    itemPrice = itemPrice + Number(item.price);
  });

  return itemPrice;
};
