import { useState, useEffect } from 'react'

const staticDataset = {
    username: '',
    email: '',
    zipcode: '',
}

const FormData = () => {
    const [dataset, updateDataset] = useState([])

    const onAppend = () => {
        updateDataset(prev => [...prev, staticDataset])
        
        console.log('appended', dataset)
    }

    const onUpdateDataset = (index, datas) => {
        let newArr = [...dataset]
        console.log('Old Dataset-->', newArr)
        newArr[index] = datas
        updateDataset(newArr)

        console.log('updated', {dataset: dataset})
    }

    const onRemove = (target, e) => {
        updateDataset(prev => {
            const newArr = [...prev]
            newArr.splice(target, 1)
            return [...newArr]
        })
        console.log('removed', {id: target, data: dataset})
    }

    return [dataset, onAppend, onUpdateDataset, onRemove]
}

export default FormData