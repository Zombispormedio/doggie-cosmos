import faker from 'faker'
import {connectDB, makeGremlin} from './graphClient'

connectDB()
const gremlin = makeGremlin()
const numUsers = 100

const createUser = async (name) => {
    return await gremlin`g.addV('person').property('id', ${name})`
}


const createEdge = async () => {
    return await gremlin`
        g.V('Eusebio Pfannerstill').addE('knows').to(g.V('Waino McCullough II'))
    `
}

const removeAll = async () => {
    return await gremlin`
    g.V().drop()
`
}

const listAll = async () => {
    return await gremlin`g.V().hasLabel('person')`
}

listAll().then(console.log).catch(console.error)