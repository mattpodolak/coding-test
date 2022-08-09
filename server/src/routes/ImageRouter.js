import express from 'express';
import { cats, sharks } from '../db/images';
const router = express.Router();

// TODO: store in MongoDB
const imageURLs = {
  cats: cats,
  sharks: sharks,
};

// @route GET api/images/url?types=cat,shark
// @desc Return images URLs of a certain type
// @access Public
router.get('/url', (req, res) => {
  const { types } = req.query;
  var images = [];

  if (types == undefined) {
    res.status(400).send({ msg: 'Types of image to return undefined' });
    return;
  }
  const typesList = types.split(',');

  for (var i in typesList) {
    const type = typesList[i];
    if (type in imageURLs) {
      images.push(...imageURLs[type]);
    }
  }

  // randomly sort array before returning:
  // fulfills requirement when user requests both, and
  // sorting on every request improves the UX as it is
  // less repetitive for repeat users
  images.sort(() => Math.random() - 0.5);

  res.status(200).send({ images, types: typesList });
});

module.exports = router;
