import {makeGremlin} from '../graphClient'


export const createNode= async (req, res) => {
    const user = await makeGremlin()`g.addV('person').property('name', ${req.body.name})`;
    res.json(user)
}

export const listNodes= async (req, res) => {
    const users = await makeGremlin()`g.V().hasLabel('person')`;
    res.json({
        users,
        totalCount: users.length
    })
}