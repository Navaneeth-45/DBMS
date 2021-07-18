//create mini express
const exp = require('express');
const userApi = exp.Router();
const moment=require("moment")
const oracledb = require('oracledb');
oracledb.autoCommit = true;
const expressErrorHandler = require("express-async-handler");
let userDataBase;
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
        console.log(loginObj)
        inputusername=loginObj.username
        inputPassword=loginObj.password;
        //retreviewing the password respected to the username received
        let userList =await userDataBase.execute(`SELECT password from users where username='${inputusername}'`)
        //if it returns empty array then invalid id 
        console.log(userList)
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

   


module.exports=userApi