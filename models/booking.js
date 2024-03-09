const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  property_name: {
    type: String,
  },
  sub_properties: {
    type: Array,
  },
  property_images: {
    type: Array,
  },
  property_room_type: {
    type: Array,
  },
  property_description: {
    type: Array,
  },
  property_price: {
    type: Array,
  },
  property_features: {
    type: Array,
  },
});
bookingSchema.set("collection", "booking");

module.exports = mongoose.model("booking", bookingSchema);
