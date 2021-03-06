import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getStoreItemArray, getTotal } from "../reducers";

const Cart = () => {
  //   const state = useSelector((state) => state);
  const storeItems = useSelector(getStoreItemArray);
  const subtotal = useSelector(getTotal);

  //   console.log(storeItems);

  return (
    <Wrapper>
      <Top>
        <Title>
          <strong>Your Cart</strong>
        </Title>
        <div>{storeItems.length} item(s)</div>
        {storeItems.map((item) => (
          <CartItem
            key={item.id}
            quantity={item.quantity}
            title={item.title}
            id={item.id}
          ></CartItem>
        ))}
      </Top>

      <Bottom>
        <Total>Total: ${subtotal}</Total>
        <Button>Purchase</Button>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: sticky;
  top: 0px;
  min-width: 300px;
  height: 100vh;
  color: white;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(64, 31, 67);
`;
const Top = styled.div``;
const Title = styled.div`
  font-size: 25px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Total = styled.div``;

const Button = styled.button`
  position: relative;
  display: block;
  width: 150px;
  border-radius: 12px;
  background: #ff406e;
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
export default Cart;
