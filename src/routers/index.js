const siteRouter = require('./site');
const nameRouter = require('./name');
const updelRouter = require('./update-del');


function Router(app){
    app.use('/updel',updelRouter);
    app.use('/name',nameRouter);
    app.use('/',siteRouter );
    
}




module.exports = Router;
