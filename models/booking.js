const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  property_name: {
    type: String,
  },
  sub_properties: {
    type: Array,
  },
});
bookingSchema.set("collection", "booking");

module.exports = mongoose.model("booking", bookingSchema);
