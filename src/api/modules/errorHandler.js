export const apiErrorHandler = (error, req, res, next) => {
  console.log(`The error handler caught the following error: 
  ${error}`);
  res.status(500);
};
