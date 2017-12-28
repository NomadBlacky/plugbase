import * as express from 'express'
import * as commander from 'commander'

const App = express()

commander
  .option('-p, --port <n>', '(default: 3030) ポートです。ねこはいます。')
  .parse(process.argv)

App.get('/', (_, response) => response.send('sugar'))

App.listen(commander.port || 3030)
