const stripe = require('stripe')('sk_test_IQF0ZyEzAj1CQNQgiD21LQsp00joU9L4yf');

module.exports = (req, res) => {
    console.log(req.item)
    stripe.skus.list(
        {
            product: req.body.item
        },

        function(err, skus) {
          // asynchronously called
          res.json(skus)
        }
      );
}