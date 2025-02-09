import { Router } from "express";
import { middlewareCustom } from "../../middlewarecuston/middleware.js";
import { Createproduct,GetAllproduct } from "./product-contoller.js";

const productRouter = Router();

productRouter.get("/",GetAllproduct);

productRouter.post("/",Createproduct);




export default productRouter;