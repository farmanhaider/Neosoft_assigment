const express = require("express");
const {
  Saveproduct,
  Getallproducts,
  editProductPage,
  deleteProduct,
} = require("./Controller/productcontroller");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("index", { Title: "Crud application", prods: "" });
});
router.get("/addproduct", (req, res) => {
  res.render("add");
});
router.get("/edit/:id", editProductPage);

router.post("/edit-data", (req, res) => {
  res.render("index");
});
router.post("/addedproduct", Saveproduct);
//router.get("/getproductbyid/:id", Getproductbyid);
router.get("/getproducts", Getallproducts);
router.get("/delete/:id", deleteProduct);
module.exports = router;

