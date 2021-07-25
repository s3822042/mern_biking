require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./routes/auth");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-biking.i7vvp.mongodb.net/mern-biking?retryWrites=true&w=majority`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const multer = require('multer');

// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 100000
//   },
//   fileFilter(req, file, cb) {
//     if(!( 
//           file.originalname.endsWith('.jpg') || 
//           file.originalname.endsWith('.jpeg') ||
//           file.originalname.endsWith('.png')  
//         )
//       ) {
//           return cb(new Error('Please upload a png/jpg/jpeg image'))
//       }

//       cb(undefined, true)
//   }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//   res.send()
// })