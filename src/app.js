const express = require("express");
const cors = require('cors');
const bodyParser = require("express");
const app = express();

//configuração da porta
app.set("port", process.env.PORT || 3001);

//middleware
app.use(express.json());

//CORS (Cross-Origin Resource Sharing)
app.use(cors());

//parser
app.use(bodyParser.urlencoded({ extended: true }));


// ROTAS ///////////////////////////////////////////////////////////////////////////


//rota estática
app.use('/public', express.static('assets'))


//rotas API (aluno) ./routes/aluno.route
const alunoApi = require('./routes/aluno.route');
app.use('/api/v1', alunoApi)


//rotas API (atividade) ./routes/atividade.route
const atividadeApi = require('./routes/atividade.route');
app.use('/api/v1', atividadeApi)


//////// TABELAS COM FOREIGN KEYS

//rotas API (user) ./routes/user.route
const userApi = require('./routes/user.route');
app.use('/api/v1', userApi)

//rotas API (refeicao) ./routes/refeicao.route
const refeicaoApi = require('./routes/refeicao.route');
app.use('/api/v1', refeicaoApi)


//rotas API (saude) ./routes/saude.route
const saudeApi = require('./routes/saude.route');
app.use('/api/v1', saudeApi)


//rotas API (saude) ./routes/saude.route
const dadosClinicosApi = require('./routes/dados_clinicos.route');
app.use('/api/v1', dadosClinicosApi)


///////////////////////////////////////////////////////////////////////////////

// server port listener
app.listen(app.get("port"), () => {
    console.log("Servidor iniciado na porta: " + app.get("port"));
});
