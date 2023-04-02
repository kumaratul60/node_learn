const express = require("express");
const router = express.Router();
const {
  getContact,
  getContactId,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// router.route("/").get((req, res) => {
//     res.status(200).json({ msg: "Get all contacts" })
// })

/***
these routes are similar path so save some lines

router.route("/").get(getContact)

router.route("/").post(createContact)

router.route("/:id").get(getContactId)

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContact)
 */

router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getContactId).put(updateContact).delete(deleteContact);

module.exports = router;
