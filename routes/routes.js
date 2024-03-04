const express = require("express");
const router = express.Router();
const booking = require("../models/booking");

router.get("/", (req, res) => {
  booking
    .findOne()
    .then((bookingDetail) => {
      console.log(bookingDetail);
      res.render("index", {
        title: "Property Details",
        bookingDetail: bookingDetail,
      });
    })
    .catch((err) => {
      res.json({ message: err.message });
      console.error(err);
    });
});

module.exports = router;
