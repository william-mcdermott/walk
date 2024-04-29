const walk = require('./walk');
const cron = require('cron');
const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
let walkRoute = walk.shuffleArray(walk.generateWalk());
let timestamp = new Date();

const job = new cron.CronJob(
    '00 00 00 * * *',
    function() {
        walkRoute = walk.shuffleArray(walk.generateWalk());
        timestamp = new Date();
    },
    null,
    true,
    'America/Chicago'
)

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${JSON.stringify(walkRoute)} at ${timestamp}`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
