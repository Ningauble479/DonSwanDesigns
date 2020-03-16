var stripe = require('stripe')('sk_test_IQF0ZyEzAj1CQNQgiD21LQsp00joU9L4yf');

module.exports = (req, res) => {
stripe.skus.update(
  req.body.id,
  {inventory: {quantity: 0}},
  function(err, sku) {
    // asynchronously called
  }
);

setTimeout(()=>{
    stripe.skus.update(
        req.body.id,
        {inventory: {quantity: 1}},
        function(err, sku) {
          // asynchronously called
        }
      );
}, 50000)
}