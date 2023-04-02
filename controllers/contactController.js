const asyncHandler = require("express-async-Handler");
const ContactModel = require("../models/contactModel");

// levels
// @desc Get all contacts
// @route Get /api/contacts
// @access public

/**
express-async-Handler = asyncHandler , this is the replacement of try catch block
whenever exception occurred  it is going to pass to the error handler
*/

const getContact = asyncHandler(async (req, res) => {
    const contacts = await ContactModel.find();
    // res.status(200).json({ msg: "Get all contacts" })
    res.status(200).json({ msg: contacts });
});

// @desc Get individual contacts
// @route GEt /api/contacts/:id
// @access public

const getContactId = asyncHandler(async (req, res) => {
    const contactId = await ContactModel.findById(req.params.id);
    if (!contactId) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({
        msg: `Get contacts for ${req.params.id}`,
        contact_Id: contactId,
    });
});

// @desc Create New contacts
// @route POSt /api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
    console.log({ ReQMes: req.body });
    const { name, my_email, id } = req.body;
    if (!name || !my_email || !id) {
        // res.status(404).json({ msg: "Provide valid param" })
        res.status(400);
        throw new Error("Provide mandatory filed");
    }
    const newContactData = await ContactModel.create({
        name,
        //  email,
        email: my_email,
        id,
    });
    res.status(201).json({
        msg: "Create contacts",
        contact_data: newContactData,
    });
    // res.status(201).json(newContactData)
});

// @desc Update New contacts
// @route PUT /api/contacts
// @access public

const updateContact = asyncHandler(async (req, res) => {
    const oldContactId = await ContactModel.findById(req.params.id);
    if (!oldContactId) {
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await ContactModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json({
        msg: `Updated contacts`,
        update_contact: updatedContact,
    });
});
// @desc Delete contacts
// @route DELETE /api/contacts
// @access public

const deleteContact = asyncHandler(async (req, res) => {
    const contactId = await ContactModel.findById(req.params.id);
    if (!contactId) {
        res.status(404);
        throw new Error("Contact not found");
    }
const deletedContact = await ContactModel.findByIdAndRemove(contactId)
console.log({deletedContact});
    await ContactModel.remove()
    res.status(200).json({ msg: contactId });
});

module.exports = {
    getContact,
    getContactId,
    createContact,
    updateContact,
    deleteContact,
};
