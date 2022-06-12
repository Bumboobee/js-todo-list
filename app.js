const express = require('express');
const moment = require('moment');
const path = require('path');

const checkListRouter = require('./src/routes/checklist');
const taskRouter = require('./src/routes/task');
const rootRouter = require('./src/routes/index');
const methodOverride = require('method-override');

require('./config/database');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method', { methods: ['POST', 'GET']}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter);
app.use('/checklists', checkListRouter);
app.use('/checklists', taskRouter.checklistDepedent);
app.use('/tasks', taskRouter.simple);


app.listen(3000, () => {
    console.log('Server is online... waiting for your command. . .')
})

/**
 * nodeMon, ferramenta de servidor de desenvolvimento, monitora os arquivos.
 * caso algum arquivo for alterado, ele realiza a atualição automática   
 */


/**
 * Comandos git
 * - git init (puxa as configurações do git)
 * - git remote add origin - associa os arquivos a um repositorio
 * - npm install express --save 
 * - git add .
 * - git commit -m 'Descricao'
 * - git push origin master (sobe para a branch previamente) 
 */

/**
 * caso chame esse link, isso seria mostrado

    app.get('/json', (req, res) => {
        console.log(req.body);
        res.json({title: 'Task X', done: true})
    })
 */

/**
 * Inicia o servidor, fzd-o 'ouvir' a porta 3000
 */

/*
const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Date: ${moment().format('DD-MM-yyyy')}`);
    next();
}

app.use(log);

/**
 * Requisição e resposta

    app.get('/', (req, res) => {
        res.send('<h1>My To Do List 📝</h1>');
    });
*/

/**
 * usa como um middleware 
 */