export class ProductEntity{
    product=[{
        id:1,
        name:"piñas"
    },
{
    id:"",
        name:"peras"
},
    {
        id:3,
        name:"papas"
    },
];

//getAll

getAll(){
    return this.product;
}
//get
get(id){
    return this.product.find((u)=>u.id === id);
}

//create
create(product){
    this.product.push(user);
}

//update
update(id,userData){
    const newproduct = this.product.filter((u)=>u.id !==id)
    newproduct.push({id:id,name: userData.name})
    this.product = newproduct;
}
//delete
delete(id){
    this.product = this.product.filter((u)=>u.id!==id);
}
}