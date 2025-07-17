// const express = require('express')
// const app = express()
// const dotenv = require('dotenv')
// const cors = require('cors')
// app.use(cors())
// app.use(express.json())
// const port = process.env.PORT||5000
// app.get("/",(req,res)=>{
//     res.send("Welcome to Home")    
//     console.log("Welcome to Home")
// })
// app.listen(port,()=>{
//     // console.log(port)
//     console.log("Listening to the system at port",port)
// })

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jobRoutes = require("./routes/Routes.js");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/jobs", jobRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
