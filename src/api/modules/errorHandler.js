export const apiErrorHandler = (error, req, res, next) => {
  console.log('You got an error');
  res.status(500);
};
