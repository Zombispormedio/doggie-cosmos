import { createClient, makeTemplateTag } from 'gremlin'
if(process.env.NODE_ENV != "production"){
    require("dotenv").config()
}

let client 

export const makeGremlin = ()=>{
    return makeTemplateTag(client)
}
export const connectDB = () =>{
    client = createClient(
        443,
        process.env.endpoint,
        {
            "session": false,
            "ssl": true,
            "user": `/dbs/${process.env.database}/colls/${process.env.collection}`,
            "password": process.env.primaryKey
        })

    return client
}
