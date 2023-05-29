const mongoose = require("mongoose");

//const DB = "mongodb+srv://salviuez:Jesusatas19@cluster0.iy7r0xj.mongodb.net";
const DB = "mongodb+srv://salviuez:Jesusatas19@cluster0.iy7r0xj.mongodb.net";

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => console.log("Database Connected")).catch((errr) => {
    console.log(errr);
});