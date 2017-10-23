import {query} from '../drivers'
import {getType} from '../config'
import gremlin from './datasource/gremlin'
import neo4j from './datasource/neo4j'

const datasources = {gremlin, neo4j}

const {createPerson, listPerson} = datasources[getType()] 

const inject = (fn) => fn.bind({query})

export const createPerson = inject(createPerson)

export const listPerson = inject(listPerson)
