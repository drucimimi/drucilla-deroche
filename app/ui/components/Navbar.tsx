'use client'
import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react'
import styles from '@/app/ui/styles/navbar.module.css'
import Icon from './icon'
import { MaterialSymbolsClose, MaterialSymbolsMenuRounded } from './icons'

const Navbar: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
   <nav className={styles.menu}>
    <div className={styles.buttonMenu}>
      <button onClick={toggleMenu}><Icon icon={isOpen ? MaterialSymbolsClose : MaterialSymbolsMenuRounded}/></button>
    </div>
   <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <li><Link href="/">
          Accueil
        </Link></li>
        <li><Link href="/resume">
          Mon CV
        </Link></li>
      </ul>
    </nav>
  )
}
export default Navbar