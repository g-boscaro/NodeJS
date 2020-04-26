const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var listaCPU = os.cpus();
var uptime = os.uptime();
var sysVer = os.version();

console.log(`Uptime: ${uptime / 60} horas.`);

console.log(`Total memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`Qnt CPUs: ${listaCPU.length}`);
console.log(`Versão do Sistema: ${sysVer}`);

for (i = 0; i < listaCPU.length;i++){
    console.log(`Modelo CPU ${i}: ${listaCPU[i].model}`);
    console.log(`Velocidade CPU ${i}: ${listaCPU[i].speed} MHz`);
};