const express = require("express");
require("../src/db/conn"); // Ensure this is connecting to MongoDB correctly
const MensRanking = require("../src/models/mens");
const router=require("../src/routers/men");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Connection is live at port no ${port}`);
});
