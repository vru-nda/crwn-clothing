import styled from 'styled-components';
import CustomButton from '../customButton/CustomButton';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
