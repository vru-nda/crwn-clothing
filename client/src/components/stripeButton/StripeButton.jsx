import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51J5XXGSAmrmweyG7tyH5ISbCF9xVG87KCLs9Pt8IloxJh39ENp91tXKAU108jvLohreHZXzrw8IHVQDhgaXIiN5S00UuUAutD0';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        token,
        amount: priceForStripe,
      },
    })
      .then((res) => {
        alert('Payment successful');
      })
      .catch((err) => {
        console.error('Errror in payment', err);
        alert(
          'There was an issue with your payment. Please use provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='CRWN clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/127S.svg'
      description={`Your total is Rs.${price}`}
      currency='INR'
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
