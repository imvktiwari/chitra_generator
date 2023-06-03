const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const fileUpload = require('express-fileupload');
dotenv.config();
//Connection
const DATABASE_URL = process.env.DB_URL;
const PORT = process.env.PORT || 5000;
//App
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
//cloudinary
app.use(fileUpload({
  useTempFiles: true
}))

/* MONGOOSE CONNECT */
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb" + err));


/* ROUTES */
const authRouter = require("./routes/auth");
const allPostsInformation = require("./routes/allPostsInformation");
const newSearchRoute = require("./routes/NewSearch");
const communitySharedRoute = require("./routes/communityShared");
const userinformationRoute = require("./routes/userInformation")

app.use("", authRouter);
app.use("", allPostsInformation);
app.use("", newSearchRoute);
app.use("", communitySharedRoute);
app.use("", userinformationRoute);

//PORT Connection
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});


