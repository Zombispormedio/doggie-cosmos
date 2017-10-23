import {query} from '../drivers'


export const createNode= async (req, res) => {
    const user = await query(`g.addV('person').property('id', '${req.body.name}')`);
    res.json(user)
}

export const listNodes= async (req, res) => {
    const users = await query(`g.V().hasLabel('person')`);
    res.json({
        users,
        totalCount: users.length
    })
}