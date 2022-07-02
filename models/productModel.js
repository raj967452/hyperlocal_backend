const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductSchema = new schema(
  {
    name: {
      type: String,
      require: true,
    },
    mrp: {
      type: String,
      require: true,
    },
    discountPercent: {
      type: String,
      require: true,
    },
    availableQuantity: {
      type: String,
      require: true,
    },
    discountedSellingPrice: {
      type: String,
      require: true,
    },
    weightInGms: {
      type: String,
      require: true,
    },
    outOfStock: {
      type: Boolean,
      require: true,
    },
    quantity: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Products = mongoose.model("products", ProductSchema);

/*module.exports = (mongoose) => {
  const productSchema = mongoose.Schema(
    {
      name: { type: String, required: true, unique: true },
      mrp: { type: String, required: true },
      discountPercent: { type: String, required: true },
      availableQuantity: { type: String, required: true },
      discountedSellingPrice: { type: String, required: true },
      weightInGms: { type: String, required: true },
      outOfStock: { type: Boolean, required: true },
      quantity: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );

  productSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Products = mongoose.model("Products", productSchema);
  return Products;
};*/
