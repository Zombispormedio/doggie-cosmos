const Module = {}
Module.createPerson = function ({name}) {
    return this.query(`CREATE (${name}:Person {name:'${name}'})`)
}

Module.listPerson = function () {
    return this.query(`MATCH (result:Person) RETURN result`).then((results) => results.map(obj => obj.get("result")))
}

export default Module