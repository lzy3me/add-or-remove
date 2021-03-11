import Head from 'next/head'
import React from 'react'
import FormData from '../actions/FormData'
import FormComponent from '../components/FormComponent'

export default function Home() {
  const [dataset, onAdded, onUpdateDataset, onRemove] = FormData()

  return (
    <div>
      <Head>
        <title>Add or Remove</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form>
        {
          dataset.map((val, index) => {
            return (
              <div className="panel-card">
                <div className="panel-title">ข้อมูลชุดที่ {index+1} <span onClick={() => onRemove(index)}>X</span></div>
                <FormComponent item={{data: val, index: index}} />
              </div>
            )
          })
        }

        <div className="buttonGroup">
          <button type="button" onClick={onAdded}>เพิ่ม</button>
          <button type="submit">ส่ง</button>
        </div>
      </form>

    </div>
  )
}
