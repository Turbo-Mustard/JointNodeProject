/**
 * GET /
 * Home page.
 */
exports.getTest = (req, res) => {
  res.render('test', {
    title: 'Test'
  });
};
