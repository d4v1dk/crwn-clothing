import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Gv3aKCz6sB2xZ4lJKp8ZcTk5TLTeXaPDePFaXlzzFJl7uFVYktNvDuHCJTgveFIezenJs3BpRmYbVUXhgYSXTbQ00gFzQFA4o';

    const onToken =token => {
        alert('Payment Successful')
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;