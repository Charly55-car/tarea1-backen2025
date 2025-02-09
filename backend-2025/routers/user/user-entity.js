export class UserEntity{
    users=[{
        id:1,
        name:"Luis"
    },
{
    id:"",
        name:"Andres"
},
    {
        id:3,
        name:"Juan"
    },
];

//getAll

getAll(){
    return this.users;
}
//get
get(id){
    return this.users.find((u)=>u.id === id);
}

//create
create(user){
    this.users.push(user);
}

//update
update(id,userData){
    const newUsers = this.users.filter((u)=>u.id !==id)
    newUsers.push({id:id,name: userData.name})
    this.users = newUsers;
}
//delete
delete(id){
    this.users = this.users.filter((u)=>u.id!==id);
}
}