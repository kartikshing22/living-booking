const express = require("express");
const router = express.Router();
const booking = require("../models/booking");

router.get("/", (req, res) => {
  booking
    .findOne({ property_name: "CHAPTER KINGS CROSS" })
    .sort({ created_at: -1 })
    .then((bookingDetail) => {
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
router.get("/json", (req, res) => {
  booking
    .findOne()
    .then((bookingDetail) => {
      res.json({
        title: "Property Details",
        bookingDetail: bookingDetail,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
      console.error(err);
    });
});

module.exports = router;
