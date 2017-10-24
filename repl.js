import {connect, query} from './drivers'
import readline from 'readline'
import util from 'util'
import {getConfiguration, getType} from './config'

const transforModel = (result)=>{
    const type = getType()
    if(type === "neo4j")
        try{
            return result.get("object")
        }catch(ignored){}
    return result
}

connect(getConfiguration())

const rl = readline.createInterface(process.stdin, process.stdout)

rl.setPrompt(`${getType()}> `)
rl.prompt();
rl.on('line', function(line) {
    if (line === "exit") rl.close();
    console.time("Time: ")
    query(line).then(results=>{
        console.timeEnd("Time: ")
       /* for(let result of results){
            console.log(util.inspect(transforModel(result), {depth: null, colors: true}))
        }*/
        rl.prompt();
    }).catch(err=>{
        console.log(util.inspect(err, {depth: null, colors: true}))
        console.timeEnd("Time: ")
        rl.prompt();
    })
}).on('close',function(){
    process.exit(0);
});

