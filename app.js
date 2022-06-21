const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const userRoutes = require("./routers/userRouter");
app.use("/user", userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`running on ${PORT}`));
