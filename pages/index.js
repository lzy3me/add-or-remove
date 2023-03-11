import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import FormData from '../actions/FormData'
import FormComponent from '@/Components/FormComponent'
import FormDataContext from '@/Context/FormDataContext'
import { LanguageManager } from '@/i18n';

export default function Home() {
  const { locale } = useRouter();
  const t = text => LanguageManager(locale)[text];
  const [dataset, onAppend, onUpdateDataset, onRemove, onSubmit] = FormData()

  const valueContext = {
    onUpdateDataset,
    onRemove
  }

  const onSubmitted = e => {
    onSubmit()
  }

  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="lzy3me" />
      </Head>

      <ul>
        <li><Link href="/" locale="en-US">English</Link></li>
        <li><Link href="/" locale="th">ภาษาไทย</Link></li>
      </ul>

      <form onSubmit={onSubmitted} className="form-container">
        {
          dataset?.map((val, index) => {
            return (
              <FormDataContext.Provider value={valueContext}>
                <FormComponent item={{ data: val, index: index }} />
              </FormDataContext.Provider>
            )
          })
        }

        <div className="buttonGroup">
          <button type="button" onClick={onAppend}>{t("add")}</button>
          <button type="submit" disabled={!dataset || dataset?.length === 0}>{t("submit")}</button>
        </div>
      </form>

    </div>
  )
}
