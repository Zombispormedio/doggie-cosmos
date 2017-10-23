
const Module = {}
Module.createPerson = function({name}){
    return this.query(`g.addV('person').property('id', '${name}')`)
}

Module.listPerson = function(){
    return this.query(`g.V().hasLabel('person')`)
}

export default Module