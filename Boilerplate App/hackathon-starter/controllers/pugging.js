/**
 * GET /
 * Home page.
 */
exports.getPugging = (req, res) => {
  res.render('pugging', {
    title: 'Pugging'
  });
};
