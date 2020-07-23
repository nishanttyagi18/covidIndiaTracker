const express = require('express')
const hbs = require('hbs')
const districtRouter = require('./routers/district')
const stateRouter = require('./routers/state')
const indexRouter = require('./routers/index')
const aboutRouter = require('./routers/about')

const path = require('path')

const publicDirectoryPath = path.join(__dirname, 'public')
const viewPath = path.join(__dirname, '/templates/views')
const partialPath = path.join(__dirname, '/templates/partials')

const app = express()
app.set('view engine', 'hbs');
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.use(express.static(publicDirectoryPath))

app.use(districtRouter)
app.use(stateRouter)
app.use(indexRouter)
app.use(aboutRouter)



const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server running at port ${port}`))
