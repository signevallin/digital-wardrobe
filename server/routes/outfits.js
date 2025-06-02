const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Casual Friday', clothes: [1] }]);
});

module.exports = router;
