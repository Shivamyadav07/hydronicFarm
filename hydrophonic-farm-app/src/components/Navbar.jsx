import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <img className={styles.iconImage} src='https://img.freepik.com/premium-vector/simple-hydroponic-farm-logo-icon-with-natural-green-leaf-water-ripple-symbol_8580-966.jpg?w=2000' alt='posterImage' />
            <Link className={styles.link} to={"/"}>Home</Link>
            <Link className={styles.link} to={'/knowlage'}>Knowlage Center</Link>
            <Link className={styles.link} to={'/hydrophonicSetup'}>Hydronic farm setup</Link>
            <Link className={styles.link} >Automation System</Link>
            <Link className={styles.link} to={'/contact'}>Contact Us</Link>
        </div>
    )
}
