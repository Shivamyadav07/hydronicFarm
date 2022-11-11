import React from 'react'
import styles from './HomePage.module.css'

export const ContactPage = () => {
    return (
        <div >
            <h1>Contact US</h1>
            <div className={styles.contact}>
                <div className={styles.info}>
                    <p>Need to get in touch with to get our services? Either fill this form or you can call us on +916386940285 or mail us at <label style={{ "color": "white", "textDecoration": "underline" }}>hydrophonic@gmail.com</label> </p>
                    <p>fill the form we will reach out to you as soon as possible with the solution of your problem </p>
                    <p>Thankyou for choosing us </p>
                </div>
                <div className={styles.form}>
                    <input type={"text"} placeholder="First Name" />
                    <input type={"text"} placeholder="Last Name" />
                    <input type={"email"} placeholder="Email" />
                    <input type={"text"} placeholder="Your query" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}
