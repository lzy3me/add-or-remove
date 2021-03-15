import { useState, useEffect } from 'react'
import { getAllUsers, deleteUser, createNewUser, updateUser } from '../api/FormUserData'

const staticDataset = {
    username: '',
    email: '',
    zipcode: '',
}

const FormData = () => {
    const [dataset, updateDataset] = useState([])

    useEffect(async () => {
        await getAllUsers().then(val => {
            updateDataset(val.data)
        })
    }, [])

    const onAppend = () => {
        updateDataset(prev => [...prev, staticDataset])
        // console.log('appended', dataset)
    }

    const onUpdateDataset = (index, datas) => {
        let newArr = [...dataset]
        // console.log('Old Dataset-->', newArr)
        newArr[index] = datas
        updateDataset(newArr)
        // console.log('updated', {dataset: dataset})
    }

    const onRemove = (target, id) => {
        if (id) deleteUser(id)
        updateDataset(prev => {
            const newArr = [...prev]
            newArr.splice(target, 1)
            return [...newArr]
        })
        // console.log('removed', {id: target, data: dataset})
    }

    const onSubmit = () => {
        dataset.map(val => {
            console.log(val)
            if (val._id)
                updateUser(val._id, { username: val.username, email: val.email, zipcode: val.zipcode })
            else
                createNewUser({ username: val.username, email: val.email, zipcode: val.zipcode })
        })
    }

    return [dataset, onAppend, onUpdateDataset, onRemove, onSubmit]
}

export default FormData