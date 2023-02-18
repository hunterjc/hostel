const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/hosteldb", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Mongodb connected ...");
  })
  .catch((err) => {
    console.log("Mongodb failed to connect ...");
    console.log(err);
  });
