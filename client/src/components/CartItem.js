import React from 'react';
import {
  CartItemContainer,
  ItemDetails,
  ItemName,
  ItemSize,
  ItemColor,
  UnitCost,
  Quantity,
  ItemSubTotal,
} from '../styles/CartItemStyles';

const CartItem = ({ cartItem }) => {
  const { product, quantity } = cartItem;

  // Add a console log to identify what's received
  console.log('Received cartItem:', cartItem);

  return (
    <CartItemContainer>
      <ItemDetails>
        <ItemName>{product.name}</ItemName>
        <ItemSize>Size: {product.size}</ItemSize>
        <ItemColor>Color: {product.color}</ItemColor>
        <UnitCost>Unit Cost: ${product.price}</UnitCost>
        <Quantity>Quantity: {quantity}</Quantity>
        <ItemSubTotal>Sub-total: ${product.price * quantity}</ItemSubTotal>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;