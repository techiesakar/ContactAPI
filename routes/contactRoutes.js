const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);

router
  .route("/:id")
  .get(getContact)
  .post(updateContact)
  .delete(deleteContact)
  .put(updateContact);

module.exports = router;
