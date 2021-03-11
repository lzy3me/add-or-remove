import { useState, useEffect } from 'react'

const FormData = () => {
    const [dataset, updateDataset] = useState([])
    const [isAdded, setIsAdded] = useState(false)
    
    const onAdded = () => setIsAdded(true)
    
    useEffect(() => {
        if (isAdded) {
            onAppend()
            setIsAdded(false)
        }
    }, [isAdded])

    const onAppend = () => {
        const temp = dataset
        console.log('TEMP-APPEND ->',temp)
        temp.push({
            username: '',
            email: '',
            zipcode: ''
        })
        updateDataset(temp)
        
        console.log('appended', dataset)
    }

    const onUpdateDataset = (index, datas) => {
        let newArr = [...dataset]
        console.log(newArr)
        newArr[index] = datas
        updateDataset(newArr)

        console.log('updated', {dataset: dataset})
    }

    const onRemove = (target) => {
        updateDataset(dataset.filter((val, index) => index !== target))

        console.log('removed', {id: [target], data: dataset})
    }

    return [dataset, onAdded, onUpdateDataset, onRemove]
}

export default FormData