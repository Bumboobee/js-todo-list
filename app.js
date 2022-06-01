const express = require('express');

const app = express();

/**
 * Requisição e resposta
 */
app.get('/', (req, res) => {
    res.send('<h1>My To Do List 📝</h1>');
});

/**
 * caso chame esse link, isso seria mostrado
 */
app.get('/json', (req, res) => {
    res.json({title: 'Task X', done: true})
})
/**
 * Inicia o servidor, fzd-o 'ouvir' a porta 3000
 */
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
