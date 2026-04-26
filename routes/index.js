const { Router } = require('express');
const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("index", {
  links: req.app.locals.links,
  messages: req.app.locals.messages
});
});


messageRouter.get('/message/:id', (req, res) => {
    const id = Number(req.params.id);
    const messages = req.app.locals.messages;

    const message = messages.find(msg => msg.id === id);
    res.render('message', { message })
})

module.exports = messageRouter;