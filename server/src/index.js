import express from 'express';
import path from 'path';

import imageRoutes from './routes/ImageRouter';

const app = express();
const port = process.env.PORT || 5000;

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use('/api/images', imageRoutes);

// catch errors and log them
app.use((err, req, res, next) => {
  console.log(err);
  next();
});

// Configure Express for serving static React production files
if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Avoid listening on port during testing
if (!module.parent) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
