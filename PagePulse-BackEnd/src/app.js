const express = require("express");
const cors = require("cors");

const auditRoutes = require("./routes/auditRoutes");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req,res)=>{
    res.json({
        message:"Page Pulse Backend is running 🚀"
    });
});


app.use("/api/audit", auditRoutes);


module.exports = app;