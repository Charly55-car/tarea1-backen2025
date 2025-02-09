import express, { request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import usersRouter from "./routers/user/users-router.js";
import productsRouter from "./routers/products/product-router.js";

const app = express();

app.use(cors())
app.use(morgan())
app.use(bodyParser())


app.use("/users",usersRouter);

app.use("/product",productsRouter);




app.listen(8000, ()=>{
    console.log("App running on port 8000");
})
