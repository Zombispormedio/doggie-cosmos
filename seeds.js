import faker from 'faker'
import {connect} from './drivers'
import {getConfiguration} from './config'
import {createPerson} from './repository'

connect(getConfiguration())

const promises = []

for(let i=0; i< 800; i++){
    promises.push(createPerson(faker.name.findName()))
}

const doit = async () => await Promise.all(promises).then(console.log).catch(console.error)

doit().then(()=>process.exit())