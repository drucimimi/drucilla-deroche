"use client"
import * as React from 'react'
import Image from 'next/image'
import styles from '@/app/ui/styles/handspinner.module.css'
import { useI18n } from '@/locales/client'

const HandSpinner = () => {
  const translate = useI18n()
  return (
    <div className={styles.spinnerContainer}>
      <Image 
        src="/images/favicon.ico"
        alt={translate('spinner.title')}
        width={50}
        height={50}
        className={styles.spinner}
      />
    </div>
  )
}

export default HandSpinner