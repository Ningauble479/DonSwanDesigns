const stripe = require('stripe')('sk_test_IQF0ZyEzAj1CQNQgiD21LQsp00joU9L4yf');

module.exports = (req, res) => {
    stripe.skus.list(
        function(err, skus) {
          // asynchronously called
          res.json(skus)
        }
      );
}