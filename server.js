const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send(
        '<p>Hi everybody, my name is Andres</p><p>I am from Bolivia.</p><p>Currently, I work in Beijing, China as Linguistic Quality Assurace in a Chinese company, testing different software.</p><p>I like to travel and learn new stuff</p>'
    )
})
app.get('/news',(req,res)=>{
    res.send(
        '<p>LATEST NEWS</p><p>Baidu fall 30%</p><p>Google closed plans for new search engine in China</p>'
    )
})
app.listen(3000,()=>{
    console.log("Running now, go to your favorite browser")
})
