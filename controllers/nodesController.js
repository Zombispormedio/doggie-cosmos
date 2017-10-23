import {createPerson, listPerson} from '../repository'


export const createNode= async (req, res) => {
    const user = await createPerson(req.body.name);
    res.json(user)
}

export const listNodes= async (req, res) => {
    const users = await listPerson();
    res.json({
        users,
        totalCount: users.length
    })
}