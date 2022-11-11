import React from 'react'
import styles from './HomePage.module.css'

export const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.poster}>
                <img className={styles.posterImage} src='https://static.wixstatic.com/media/da6885_8f2064e94804451cacd6baf93521d25c~mv2.jpg/v1/fill/w_1342,h_755,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Homepage-banner-2.jpg' alt='CoverImage' />
                <div className={styles.infodiv}>
                    <h1>We grow Nutritious</h1>
                    <h1>HERBS,FRUTIES & VEGGIES</h1>
                    <p>By Hydrophonic Technique that yield more than 5times more cropes and uses 90% less water</p>
                    <p>than soil based farming</p>
                </div>
            </div>
            <div style={{ "padding": "0px 40px" }}>
                <h1>Our Services</h1>
                <p style={{ "textAlign": "left" }}>
                    <label style={{ "fontWeight": "600", "textDecoration": "underline" }}>
                        Hydrophonic Farming :
                    </label>
                    Rise Hydroponics serves the widest range of solutions
                    for Hydroponics farm setups. With a brilliant and
                    exceptional team of Agronomists, Engineers and Agritech
                    experts, We always deliver outstanding results for
                    Corporates, Individuals, HoReCa, Government
                    Institutions and more.
                </p>
                <div className={styles.components}>
                    <div className={styles.comDiv}>
                        <img src='https://risehydroponics.in/wp-content/uploads/2021/04/Outdoor-Hydroponics-Farm-Setup-1.png' alt='icon' />
                        <h4>Outdoor Hydroponics Farm Setup</h4>
                        <p>A 360 degree solution for setting up commercially profitable outdoor hydroponics farms that deliver maximum crop yield.</p>
                    </div>
                    <div className={styles.comDiv}>
                        <img src='https://risehydroponics.in/wp-content/uploads/2021/04/Indoor-Hydroponics-Farm-Setup.png' alt='icon' />
                        <h4>Indoor Hydroponics Farm Setup</h4>
                        <p>Indoor Farms by Rise Hydroponics, raises crops In an all-round controlled environment monitored by latest technologies.</p>
                    </div>
                    <div className={styles.comDiv}>
                        <img src='https://risehydroponics.in/wp-content/uploads/2021/04/Polyhouse-Structure-Development.png' alt='icon' />
                        <h4>Polyhouse Structure Development</h4>
                        <p>We build and Install Hydroponics based Poly house- Farming Setups for growing various seasonal and non-seasonal crops.</p>
                    </div>
                    <div className={styles.comDiv}>
                        <img src='https://risehydroponics.in/wp-content/uploads/2021/04/Live-Hydroponics-Training-Workshops.png' alt='icon' />
                        <h4>Live Hydroponic Farming Training & Workshops</h4>
                        <p>Learn Hydroponic Farming on multiple operational farms and gain rich insights on crops, setups and scope.</p>
                    </div>
                    <div className={styles.comDiv}>
                        <img src='https://risehydroponics.in/wp-content/uploads/2021/04/Subsidy-Based-Soilless-Agriculture-Farm.png' alt='icon' />
                        <h4>Subsidy Based Soilless Agriculture Farm</h4>
                        <p>Avail handsome subsidies by Central & State Governments By installing special soil-less farming systems in your space.</p>
                    </div>
                    <div className={styles.comDiv}>
                        <img src='https://risehydroponics.in/wp-content/uploads/2021/04/Hydroponics-System-Installations.png' alt='icon' />
                        <h4>Project Development</h4>
                        <p>Choose from widest range of Hydroponics Systems and Rise Hydroponics will implement turnkey solutions for all projects.</p>
                    </div>
                </div>
                <h1 className={styles.contacth}>Contact US</h1>
            </div>
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
