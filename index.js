const express = require("express");
const app = express();
const PersonModel = require("./model/person.model");
const {
  personValidationMiddleWare,
  personUpdateValidationMiddleware,
} = require("./validation/person.validate");

require("dotenv").config();
const port = process.env.PORT;

const mongoDbConnect = require("./database/db");
mongoDbConnect();

app.use(express.json());
// - CREATE: Adding a new person. =>/api
app.post("/api", personValidationMiddleWare, async (req, res) => {
  const person = new PersonModel(req.body);
  try {
    await person.save();
    res
      .status(201)
      .json({ message: "Added a new person successfully!", person });
  } catch (error) {
    res.status(500).json({ error: "Invalid Entry!", error: error.message });
  }
});

// - READ: Fetching details of all persons. => /api
// app.get("/api", async (req, res) => {
//   const allPeople = await PersonModel.find();
//   try {
//     res
//       .status(200)
//       .json({ message: "Persons' details retrieved successful!", allPeople });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "No person detail found!", error: error.message });
//   }
// });

// - READ: Fetching details of a person. => /api/user_id
app.get("/api/:user_id", async (req, res) => {
  try {
    const person = await PersonModel.findById(req.params.user_id);
    res
      .status(200)
      .json({ message: "Person's detail retrieved successful!", person });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Person Not Found!", error: error.message });
  }
});

// - UPDATE: Modifying details of an existing person => /api/user_id
app.put("/api/:user_id", personUpdateValidationMiddleware, async (req, res) => {
  try {
    const updatePerson = await PersonModel.findByIdAndUpdate(
      req.params.user_id,
      { $set: req.body },
      { new: true }
    );
    res
      .status(201)
      .json({ message: "Person detail(s) updated successfully", updatePerson });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Updated Not Successful!", error: error.message });
  }
});

// - DELETE: Removing a person => /api/user_id
app.delete("/api/:user_id", async (req, res) => {
  try {
    await PersonModel.findByIdAndDelete(req.params.user_id);
    res.status(200).json({ message: "Person has been deleted successfully!" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.listen(port, () => {
  console.log("Server hit the ground running!");
});
