exports.form = async (req, res) => {
  res.render("add-car", {
    layout: "layouts/dashboard-layout",
    title: "BCR - Add Car",
  });
};
