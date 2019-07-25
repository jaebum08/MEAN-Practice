const commerceCtrl = require('../controllers/commerceCtrl.js')

module.exports = (app) => {
    app.get('/api/products', commerceCtrl.index)
    app.post('/api/products', commerceCtrl.create)
    app.get('/api/:id', commerceCtrl.getOne)
    app.delete('/api/:id', commerceCtrl.deleteOne)
    app.put('/api/:id/edit', commerceCtrl.updateOne)
}