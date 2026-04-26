const { Router } = require('express');
const newRouter = Router();

newRouter.get('/', (req, res) => {
    res.render('new', {links: req.app.locals.links})
})



let idNum = 1;
newRouter.post('/', (req, res) => {
    req.app.locals.messages.push({
        text: req.body.text,
        user: req.body.user,
        added: new Date(),
        id: idNum++
    });
    res.redirect('/')
});

module.exports = newRouter