const os = require('os');
require('colors');

const SERVER_PORT = 8000;
const ips = Object.values(os.networkInterfaces())
    .reduce((r, list) => r.concat(list.reduce((rr, i) => rr.concat(i.family === 'IPv4' && i.address || []), [])), [])
    .map(ip => `http://${ip}:${SERVER_PORT}`);

console.info(`** Once started, head to one of following URLs: ${ips.join(', ').cyan} **`.blue);
console.info();
