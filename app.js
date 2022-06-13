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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is online... waiting for your command. . .')
})