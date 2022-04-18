const { request, response } = require("express");
const express = require("express")
const books = require("./book.json")
const PORT = 8000;

let app = express();

app.get("/books",(request,response)=>{
    response.json(books)
})

app.get("/books/:id",(request,response)=>{
    const {id} = request.params;

    const book = books.find((book)=> book.id === Number(id))
  
    response.json(book)
})

app.listen(PORT,()=>{
    console.log(`Listening PORT : ${PORT}`)
})