import { useState, useEffect } from 'react'

const FormData = () => {
    const [dataset, updateDataset] = useState([])
    const [isAdded, setIsAdded] = useState(false)
    
    const onAdded = () => setIsAdded(true)
    
    useEffect(() => {
        if (isAdded)
        onAppend()
        setIsAdded(false)
    }, [isAdded])

    const onAppend = () => {
        const temp = dataset
        temp.push({
            username: '',
            email: '',
            zipcode: ''
        })
        updateDataset(temp)
        
        console.log('appended', dataset)
    }

    const onUpdateDataset = (index, username, email, zipcode) => {
        console.log('parseData', {id: index, data: {username: username, email: email, zipcode: zipcode}})
        const temp = dataset
        temp.splice(index, 1, {username: username, email: email, zipcode: zipcode})
        updateDataset(temp)

        console.log('updated', {dataset: dataset})
    }

    const onRemove = (target) => {
        updateDataset(dataset.filter((val, index) => index !== target))

        console.log('removed', {id: [target], data: dataset})
    }

    return [dataset, onAdded, onUpdateDataset, onRemove]
}

export default FormData