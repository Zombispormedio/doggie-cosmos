import {connectDB, makeGremlin} from './graphClient'
import readline from 'readline'
import util from 'util'

const client = connectDB()
const query = (line) => {
    return new Promise((resolve, reject) => {
        client.execute(line, (err, results) => {
            if (err) {
              return reject(err)
            }
          
            resolve(results);
          });
    })
}

const rl = readline.createInterface(process.stdin, process.stdout)

rl.setPrompt("gremlin> ")

rl.prompt();
rl.on('line', function(line) {
    if (line === "exit") rl.close();
    console.time("Time: ")
    query(line).then(result=>{
        console.log(util.inspect(result, {depth: null, colors: true}))
        console.timeEnd("Time: ")
        rl.prompt();
    }).catch(err=>{
        console.log(util.inspect(err, {depth: null, colors: true}))
        console.timeEnd("Time: ")
        rl.prompt();
    })
}).on('close',function(){
    process.exit(0);
});