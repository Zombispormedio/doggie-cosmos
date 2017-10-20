import {gremlin} from '../graphClient'


export const createNode= async (req, res) => {
    const user = await gremlin()`g.addV('person').property('name', ${req.body.name})`;
    res.json(user)
}

export const listNodes= async (req, res) => {
    const user = await gremlin()`g.V().hasLabel('person')`;
    res.json(user)
}