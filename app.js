//chama o express
var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

var app = express();

app.get('/' , (req, res) =>{
      res.send("tela de login")
})

app.get('/agendamento' , (req, res) =>{
      res.send("tela que verifica seus agendamentos")
})

app.get('cadastro',(req , res) =>{
      res.send("realizar um agendamento")
})
      
//liagar o servidor
app.listen(3000, () => {
      console.log("servidor ligado")
})