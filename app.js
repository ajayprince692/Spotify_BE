import  express  from "express";
// require("dotenv/config")
import dotenv from "dotenv"
import cors from "cors"
import  mongoose from "mongoose"

const app = express();
dotenv.config();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) =>{
  return res.json("Welcome to Music Web Server Side....😍😍😍!!")
})

// user authentication routes
import userRoute from "./src/routes/auth.js"
app.use("/api/users/", userRoute);

// Artist links
import artistsRoute from "./src/routes/artists.js"
app.use("/api/artists/", artistsRoute);

// Album links
import albumRoute from"./src/routes/albums.js"
app.use("/api/albums/",albumRoute);

// Songs links
import songRoute from "./src/routes/songs.js"
app.use("/api/songs/", songRoute);



// If any depreciation warning add depreciation options

mongoose.connect(process.env.DB_URL,{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connection
.once("open",() => console.log("🎉🎉🧬..MongoDB is Connected..🧬🎉🎉"))
.on("error",(error)=>{
  console.log(`ERROR : ${error}`);
})

const PORT = 8000;
app.listen(PORT, () => console.log(`App is Listening to port ${PORT}`));