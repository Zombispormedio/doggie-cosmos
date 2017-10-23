export const createPerson = function({name}){
    return this.query(`g.addV('person').property('id', '${name}')`)
}

export const listPerson = function(){
    return this.query(`g.V().hasLabel('person')`)
}