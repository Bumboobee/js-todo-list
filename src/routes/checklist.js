const express = require('express');
/**
 * cria um objeto de rotas 
 */
const router = express.Router();

router.get('/checklists', (req, res) => {
    console.log('Hello!');
    res.send();
})

module.exports = router;