import * as express from 'express'

const App = express()

App.get('/', (_, response) => response.send('sugar'))

App.listen(3030)
