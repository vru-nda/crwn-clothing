import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    margin: 0 auto;
    font-size: 16px;
  }
`;

export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const TextContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    padding-left: 10px;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  padding-left: 20px;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    padding-left: 10px;
  }
`;
