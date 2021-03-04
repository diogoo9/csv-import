import express, { Request, Response } from "express";
const  {Sequelize} =  require('sequelize');
const app = express();
const csv=require('csvtojson') 


app.use(express.json());
app.get('/',(req: Request,res: Response)=>{

});


const tbCliente = '/home/diogo/developer/estudos/code/src/files/tblCliente.csv';
const tblPais = '/home/diogo/developer/estudos/code/src/files/tblPais.csv';
const tblPedido = '/home/diogo/developer/estudos/code/src/files/tblPedido.csv';
const tblQuestao = '/home/diogo/developer/estudos/code/src/files/tblQuestao.csv';
const tblQuestaoOpcao = '/home/diogo/developer/estudos/code/src/files/tblQuestaoOpcao.csv';
const tblResposta = '/home/diogo/developer/estudos/code/src/files/tblResposta.csv';
const tblSexo = '/home/diogo/developer/estudos/code/src/files/tblSexo.csv';


csv({
    delimiter:";"
})
.fromFile(tbCliente)
.then((jsonObj: any)=>{
    // console.log(jsonObj);
})

const sequelize = new Sequelize('TesteDB','sa','qxds@1589',{
    host:'127.0.0.1',
    dialect:'mssql',    
});

console.log(sequelize.query('select * from tblCliente').then());

try {
    sequelize.authenticate().then();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.listen(3000);