const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/getUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const validate = require("../validation/validation");

//To fetch all the notes of a user
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try { 
    const data = await User.findOne({ user: req.user.id }).select("-password");
    const notes = await Notes.find({ data: data.id });
    res.json(notes);
  } catch (error) {
    res.status(500).send({ err: "Some Internal error occur" });
  }
});

//To create notes of a user
router.post(
  "/createnote",
  fetchuser,
  validate([
    body("title", "Enter valid Title").isLength({ min: 3 }),
    body(
      "description",
      "Please enter valid disciption more then 5 letter"
    ).isLength({
      min: 5,
    }),
  ]),
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      console.log(tag);
      const data = await User.findOne({ user: req.user.id }).select(
        "-password"
      );
      const note = new Notes({
        tag,
        title,
        description,
        user: data.id,
      });
      console.log(note);
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      res.status(500).send({ err: "Some Internal error occur" });
    }
  }
);

//To update value of an notes of a user
router.put("/updatenote/:id", fetchuser, async (req, res) => {
    try{
  const dataId = req.params.id;
  const { title, description, tag } = req.body;

  let note = await Notes.findOne({id: dataId});
  if (!note) {
    return res.status(404).send("Not Found");
  }

  const data = await User.findOne({ user: req.user.id }).select("-password");
  if (note.user.toString() !== data.id) {
    return res.status(401).send("Not Allowed");
  }
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }
  note = await Notes.findByIdAndUpdate(
    dataId,
    { $set: newNote },
    { new: true }
  );
  res.send({note});
} catch (error) {
    res.status(500).send({ err: "Some Internal error occur" });
  }
});

//To Delete notes of a user
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
    // try{
  const dataId = req.params.id;

  let note = await Notes.findOne({id: dataId});
  if (!note) {
    return res.status(404).send("Not Found");
  }

  const data = await User.findOne({ user: req.user.id }).select("-password");
  if (note.user.toString() !== data.id) {
    return res.status(401).send("Not Allowed");
  }
  note = await Notes.findByIdAndDelete(dataId);
  res.json({"Sucess": "The note has been deleted","note": note});
// } catch (error) {
//     res.status(500).send({ err: "Some Internal error occur" });
//   }
});

module.exports = router;
