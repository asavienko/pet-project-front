## Redirect urls

### Checkout

/subscription/checkout?success=true  
/subscription/checkout?canceled=true

## Test Cards
https://stripe.com/docs/testing

stripe card -> 4242424242424242
4000 0025 0000 3155



## Testing

- create customer 
```
curl https://api.stripe.com/v1/customers \
  -u sk_test_26PHem9AhJZvU623DfE1x4sd: \
  -X "POST"
```

- create a setup intent
```
curl https://api.stripe.com/v1/setup_intents \
  -u sk_test_26PHem9AhJZvU623DfE1x4sd: \
  -d customer="{{CUSTOMER_ID}}" \
  -d "payment_method_types[]"=bancontact \
  -d "payment_method_types[]"=card \
  -d "payment_method_types[]"=ideal
```


### STRIPE SUBSCRIPTION STATUS EXPLANATION: https://mrcoles.com/stripe-api-subscription-status/