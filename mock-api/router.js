const express = require('express');
const router = express.Router();

const delay = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

router.post('/api/v1/auth/login', async (req, res) => {
  await delay(1);

  return res.json({
    success: true,
    code: 200,
    data: {
      access_token: 'xxx.yyy.zzz',
      refresh_token: 'aaa.bbb.ccc',
      token_type: 'Bearer',
      name: 'Saroar Hossain Shahan',
    },
  });
});

module.exports = router;
