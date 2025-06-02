const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, type: 'T-shirt', color: 'vit' }]);
});

module.exports = router;
