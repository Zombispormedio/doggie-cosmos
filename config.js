import {argv} from 'yargs'
require("dotenv").config()

const config ={
    neo4j: {host: process.env.NEO4J_URL, user: process.env.NEO4J_USER, password: process.env.NEO4J_PASSWORD},
    gremlin: {host: process.env.GREMLIN_HOST, user: process.env.GREMLIN_USER, password: process.env.GREMLIN_PASSWORD}
}
const type = argv.t || "neo4j"

export const getType = () => type

export const getConfiguration = () => config[type]