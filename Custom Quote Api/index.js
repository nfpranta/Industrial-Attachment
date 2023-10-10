const express = require('express')
const mongoose=require('mongoose')
const quoteSchema=require('./quoteSchema')
const Quote=require('./quoteSchema')
const app = express()
const port = 3000
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1/quotes')
.then(()=> console.log("Connection Successful"))
.catch((err)=>console.log(`There is an ${err}`))

app.get('/api/v1', async(req, res) => {
  const quote=await Quote.find()
  res.status(200).json({
    quote
  })
})

app.get('/api/v1/:id', async(req, res) => {
  const {id}=req.params
  console.log(id)
  const quote=await Quote.find()
  const newQuote=quote.slice(0,id)
  res.status(200).json({
    newQuote
})
})

app.post('/api/v1', async(req, res,next) => {
    try{
    const newQuote=new Quote(req.body)
    await newQuote.save();
    res.status(200).json({
      message:"Quote is entered successfully",
      newQuote
    })
  }
  catch(err)
  {
      return next('The Quote is not posting');
  }
  })
app.listen(port, () => {
  console.log(`Industrial Api listening on port ${port}`)
})