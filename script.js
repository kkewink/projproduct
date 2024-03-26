const express = require ('express');
const porta = 3001;
const app = express();
const router = require('./src/routers/router');

app.use(express.json());
app.use(express.static("public"));
app.use("/", router);

app.listen(porta, () => {

    console.log("Servidor executado na porta 3001");
});


