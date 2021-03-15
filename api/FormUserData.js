import axios from 'axios';

const getAllUsers = () => axios.get('http://localhost:3000/users');

const createNewUser = (dataset) => axios.post('http://localhost:3000/users', dataset)

const updateUser = (id, dataset) => axios.patch(`http://localhost:3000/users/${id}`, dataset)

const deleteUser = (id) => axios.delete(`http://localhost:3000/users/${id}`)

export {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}