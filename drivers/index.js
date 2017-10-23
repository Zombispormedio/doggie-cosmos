import gremlin from './gremlin'
import neo4j from './neo4j'
import {getType} from '../config'
const databases = {gremlin, neo4j}

const Database = databases[getType()]

const db = new Database()

export const connect = (config) => db.createConnection(config)
export const query = (q) => db.createQuery(q)