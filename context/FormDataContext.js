import { createContext, useContext } from 'react'

const FormDataContext = createContext()
export default FormDataContext

export const useFormDataContext = () => {
    return useContext(FormDataContext)
}
