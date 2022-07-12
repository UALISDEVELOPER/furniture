import cluster from 'cluster';
import { cpus } from 'os';
import process from 'process';

const numCPUs = cpus().length;


const isPrimary = () => {
    console.log(`Primary ${process.pid} is running`);
    
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
    
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });

}

export default isPrimary;