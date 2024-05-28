const express = require('express')
const app = express();
app.get('/',(req,res)=>{
    const data = {name: "Nagateja", age: 20, company: "HashiCorp"}
    res.send(data)
})
app.listen(8000,()=>{
    console.log("app is listening on port 8000")
})