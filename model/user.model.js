const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


//create a new user
const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

//get a specific user by email
const getUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: {
            email: email
        }
    })
}

//get all users

const getUsers = async () => {
    return await prisma.user.findMany()
}

//get specific user by id

const getUserById = async (id) => {
    return await prisma.user.findUnique({
        where: {
            id: id
        }
    })
}

//update user by id
const updateUser = async (id, user) => {
    return await prisma.user.update({
        where: {
            id: id
        },
        data: user
    })
}

//delete user by id

const deleteUser = async (id) => {
    return await prisma.user.delete({
        where: {
            id: id
        }
    })
}

module.exports = {
    createUser,
    getUserByEmail,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}

