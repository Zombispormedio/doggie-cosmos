import {} from '../repository'


export const createNode= async (req, res) => {
    const user = await ;
    res.json(user)
}

export const listNodes= async (req, res) => {
    const users = await ;
    res.json({
        users,
        totalCount: users.length
    })
}