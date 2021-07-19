//create mini express
const exp = require('express');
const userApi = exp.Router();
const moment=require("moment")
const oracledb = require('oracledb');
oracledb.autoCommit = true;
const expressErrorHandler = require("express-async-handler");
let userDataBase;





userApi.use(exp.json())
const errorHandler=require("express-async-handler")
const bcryptjs=require("bcryptjs")


//connecting to oracle database
oracledb.getConnection(
    {
      user          : "NAVA",
      password      : "#Rohit#45",
      connectString : "localhost/xe"
    },
    function(err, connection)
    {
        if (err) { console.error(err); return; }
      //when connection is successfull
      userDataBase=connection;
      console.log("Connection to Data base was successful")
    });

    //login authentication
    userApi.post("/login", expressErrorHandler(async (req, res) => {
        //gettig data from api
        loginObj=req.body;
    
        inputusername=loginObj.username
        inputPassword=loginObj.password;
        //retreviewing the password respected to the username received
        let userList =await userDataBase.execute(`SELECT password from users where username='${inputusername}'`)
        //if it returns empty array then invalid id 
        
        if(userList.rows.length==0){
            res.send({message:"Invalid Id"})
        }
        //if it returns non empty array then verify password 
        else{
       if(userList.rows[0]==inputPassword){
           res.send({message:"successful"})
       }
        else{
            res.send({message:"Invalid Password"})
        }
     }
    }))


    //account registration by the user
    userApi.post("/register",expressErrorHandler(async(req,res)=>{
        let newRegister=req.body;
       
        //adding the registered details in register table 
        await userDataBase.execute(`insert into users values
           ('${newRegister.username}',
            '${newRegister.email}',
            ${newRegister.mobileno},
            '${newRegister.password}'
            )`)
        res.send({message:"User created"})
    }))

   




















    //add to cart
userApi.post("/add-to-cart", errorHandler(async (req, res, next) => {

    let userCartCollectionObject = req.app.get("userCartCollectionObject")

    let newProdObject = req.body;
    //console.log(newProdObject)

    
    //find usercartcollection 
    let userCartObj = await userCartCollectionObject.findOne({username:newProdObject.username})

    //console.log(userCartObj)

    //if userCartObj is not existed
    if (newProdObject.username===null){
        res.send({message:"Login Required"})
}

    else if (userCartObj === undefined) {

        //create new object
        let products = [];

        products.push(newProdObject.productObject)

        let newUserCartObject = { username:newProdObject.username, products }

        //insert it
        await userCartCollectionObject.insertOne(newUserCartObject)

        let latestCartObj = await userCartCollectionObject.findOne({ username:newProdObject.username })
        res.send({ message: "New product Added", latestCartObj: latestCartObj })

    }
    //if existed
    else {
        //push productObject to products array
        userCartObj.products.push(newProdObject.productObject)
        //update document
        await userCartCollectionObject.updateOne({ username: newProdObject.username }, { $set: { ...userCartObj } })
        let latestCartObj = await userCartCollectionObject.findOne({ username: newProdObject.username })
        res.send({ message: "New product Added", latestCartObj: latestCartObj })
    }

}))


//get products from user cart
userApi.get("/getproducts/:username", errorHandler(async (req, res, next) => {

    let userCartCollectionObject = req.app.get("userCartCollectionObject")

    let un = req.params.username;

    let userProdObj = await userCartCollectionObject.findOne({ username: un })

    if (userProdObj === null) {
        res.send({ message: "Cart-empty" })
    }
    else {
        res.send({ message: userProdObj })
    }


}))



module.exports=userApi