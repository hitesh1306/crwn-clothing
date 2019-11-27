import React from "react";
import StripeCheckOut from "react-stripe-checkout";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_UwEGLFia7r9kivEu5I6C1LEv00oW5KFGVu";

  const onToken = token => {
    console.log(token);
    alert("Payment Sucessful");
  };
  return (
    <StripeCheckOut
      currency="USD"
      lable="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckOutButton;
