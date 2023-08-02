import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <nav className={styles.mainvav}>

<ul>
  <Link href="/home">
  <li>Home</li>
  </Link>
  <Link href='/about'>
  <li>About</li>
  </Link>
  <Link href='/blog'>
  <li>Blog</li>
  </Link>
  <Link href='contact'>
  <li>Contact</li>
  </Link>
  <Link href='product'>
  <li>Product</li>
  </Link>
</ul>
</nav>

    </div>
  )
}

export default Navbar
