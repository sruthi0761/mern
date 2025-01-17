const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sruthikrishna:Sruthi200506@cluster0.bmzjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
    console.log("Connected to MongoDB");
})