import { ProductEntity } from "./products-entity.js";
const productEntity = new ProductEntity();

export const GetAllproduct = (request,response)=>{
const product = productEntity.getAll();
return response.json({
    data: product,
});
};

export const Createproduct = (request,response)=>{
    response.json({
        message:"Hola mundo",
    }); 
};