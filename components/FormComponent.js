import React, { useState, useEffect } from 'react'
import FormData from '../actions/FormData'

const FormComponent = (props) => {
    const [dataset, onAdded, onUpdateDataset, onRemove] = FormData()
    const [username, setUsername] = useState(props.item?.data.username)
    const [email, setEmail] = useState(props.item?.data.email)
    const [zipcode, setZipcode] = useState(props.item?.data.zipcode)

    useEffect(() => {
        onUpdateDataset(props.item?.index, username, email, zipcode)
        console.log('will update')
    }, [username, email, zipcode])

    return (
        <div className="panel-body">
            <label>ชื่อ </label>
            <input type="text" name="user" value={username} onChange={e => setUsername(e.target.value)} required={true} />
            <label>อีเมล</label>
            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required={true} />
            <label>รหัสไปรษณี</label>
            <input type="number" name="zipcode" value={zipcode} onChange={e => setZipcode(e.target.value)} />
        </div>
    )
}

export default FormComponent