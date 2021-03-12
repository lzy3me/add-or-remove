import React, { useRef } from 'react'
import { useFormDataContext } from '../context/FormDataContext'

const FormComponent = (props) => {
    const { onUpdateDataset } = useFormDataContext()
    const u = useRef(props.item.data.username)
    const e = useRef(props.item.data.email)
    const z = useRef(props.item.data.zipcode)

    const onChange = () => {
        const name = u.current.value
        const email = e.current.value
        const zip = z.current.value

        const obj = {
            username: name,
            email: email,
            zipcode: zip
        }
        onUpdateDataset(props.item.index, obj)
    }

    return (
        <div className="panel-body">
            <label>ชื่อ </label>
            <input type="text" name="username" value={props.item.data.username} ref={u} onChange={onChange} required={true} />
            <label>อีเมล</label>
            <input type="email" name="email" value={props.item.data.email} ref={e} onChange={onChange} required={true} />
            <label>รหัสไปรษณี</label>
            <input type="number" name="zipcode" value={props.item.data.zipcode} onChange={onChange} ref={z} />
        </div>
    )
}

export default FormComponent