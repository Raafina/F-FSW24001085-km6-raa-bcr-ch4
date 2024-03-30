const axios = require("axios");

exports.dashboard = async (req, res) => {
  const data = await axios.get("http://localhost:3000/api/car");

  res.render("dashboard", {
    data,
    layout: "layouts/dashboard-layout",
    title: "BCR - Dashboard",
  });
};
