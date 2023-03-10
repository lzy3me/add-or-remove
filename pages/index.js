import Head from 'next/head'
import React from 'react'
import FormData from '../actions/FormData'
import FormComponent from '../components/FormComponent'
import FormDataContext from '../context/FormDataContext'

export default function Home() {
  const [dataset, onAppend, onUpdateDataset, onRemove, onSubmit] = FormData()

  const valueContext = {
    onUpdateDataset,
    onRemove
  }

  const onSubmitted = e => {
    // e.preventDefault()
    onSubmit()
  }

  return (
    <div>
      <Head>
        <title>Add or Remove</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form onSubmit={onSubmitted} className="form-smooth">
        {
          dataset.map((val, index) => {
            return (
              <FormDataContext.Provider value={valueContext}>
                <FormComponent item={{ data: val, index: index }} />
              </FormDataContext.Provider>
            )
          })
        }

        <div className="buttonGroup">
          <button type="button" onClick={onAppend}>เพิ่ม</button>
          <button type="submit">ส่ง</button>
        </div>
      </form>

    </div>
  )
}
