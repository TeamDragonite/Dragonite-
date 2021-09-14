const express = require('express');
const { applyMiddleware } = require('redux');
const path = require('path');
const PORT = 3000;
const apiRouter = require('./routers/api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

app.use('/api', apiRouter);

//allow access to our index.html folder
// app.use('/', express.static(path.join(__dirname, '../client')));

// app.get('/', (req, res) => {
//   return res
//     .status(200)
//     .sendFile(path.resolve(__dirname, '../client/index.html'));
// });



//serve the index file 
if (process.env.NODE_ENV === 'production') {
  //allow access to our index.html folder
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });
}

// app.use('/*', (req, res) => {
//   return res.sendFile(path.resolve(__dirname, '../client/index.html'));
// }
// );

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

module.exports = app;