//create express app
const exp = require("express")
const app = exp();
const path=require("path")


require("dotenv").config()
const mc=require("mongodb").MongoClient;

//connecting angular with express server
app.use(exp.static(path.join(__dirname,"./dist/SHOPPING/")))

app.use(exp.json())
//import APIS
const userApi = require("./APIS/user-api.js")
//execute specific api based on path
app.use("/user", userApi)
//invalid path
app.use((req, res, next) => {

    res.send({ message: `path ${req.url} is invalid` })
})








const databaseUrl=process.env.DATABASE_URL;

let databaseObj;
let userCollectionObj;
//connect to db
mc.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err){
        console.log('error in db connection',err)
    }
    else{
        // get database object
            databaseObj=client.db("mydb")
            //create usercollection obj
            userCollectionObj=databaseObj.collection("usercollection")
            app.set("userCollectionObj", userCollectionObj)
            let userCartCollectionObject = databaseObj.collection("usercartcollection")
            app.set("userCartCollectionObject", userCartCollectionObject)
            console.log(' connected to database')
    }
})

//error handling middleware
app.use((err, req, res, next) => {
    res.send({ message: `error is ${err.message}` })
})

//assign port
const port = 2000;
app.listen(port, () => console.log(`server on ${port}...`))