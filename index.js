var app         = require('connect')()
var serveStatic = require('serve-static')

app.use(serveStatic('.'))

console.log(' ➜   Open: http://localhost:3000')
app.listen(3000)