import sub from "./s.mjs";
import express from "express"

const app = express()

app.get('/' , (req , res)=>{

    res.send(`<h1>hello ${sub(4,2)}</h1>`)
})

app.listen(8080, function(){console.log(`server rodando http://localhost:8080`)})