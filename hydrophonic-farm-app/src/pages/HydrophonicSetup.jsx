import React from 'react'
import styles from './HydrophonicSetup.module.css'

export const HydrophonicSetup = () => {
    return (
        <div>
            <div className={styles.heading}>
                <p>Commercial Hydrophonic Farming System In India</p>
            </div>
            <div className={styles.maindiv}>
                <h1>Technologies for commercial hydroponic urban farming</h1>
                <div className={styles.infodiv}>
                    <img src='https://static.wixstatic.com/media/da6885_2805988b152c48c8ae833fc1e2e8fb11~mv2.png/v1/fill/w_700,h_437,al_c,lg_1,q_85,enc_auto/vertical%20NFT%20system.png' alt='infoImage' />
                    <p>
                        VERTICAL
                        NFT
                        SYSTEM
                    </p>
                </div>
                <div className={styles.infodiv}>
                    <img src='https://static.wixstatic.com/media/da6885_4aee51ce063048249bada911f575e0d7~mv2.jpg/v1/fill/w_700,h_437,al_c,lg_1,q_80,enc_auto/aeroponic.jpg' alt='infoImage' />
                    <p>
                        AEROPONIC
                        SYSTEM
                    </p>
                </div>
                <div className={styles.infodiv}>
                    <img src='https://static.wixstatic.com/media/da6885_e9b5fd9a33e24a1693700fc21c01123d~mv2.png/v1/fill/w_689,h_438,al_c,lg_1,q_85,enc_auto/Horizontal%20NFT%20system.png' alt='infoImage' />
                    <p>
                        HORIZONTAL
                        NFT
                        SYSTEM
                    </p>
                </div>
                <div className={styles.infodiv}>
                    <img src='https://static.wixstatic.com/media/da6885_f4405da518e44f6389d9603b3582dba6~mv2.png/v1/fill/w_691,h_438,al_c,lg_1,q_85,enc_auto/Indoor%20grow%20system.png' alt='infoImage' />
                    <p>
                        INDOOR
                        GROW
                        SYSTEM
                    </p>
                </div>
                <div className={styles.infodiv}>
                    <img src='https://static.wixstatic.com/media/da6885_a55d7a099a804bb59b1e2a02a9295fcc~mv2.png/v1/fill/w_700,h_434,al_c,lg_1,q_85,enc_auto/DWC%20system%20(Raft%20system).png' alt='infoImage' />
                    <p>
                        DWC SYSTEM
                        OR
                        RAFT SYSTEM
                    </p>
                </div>
                <div className={styles.infodiv}>
                    <img src='https://static.wixstatic.com/media/da6885_06205fb0ad6140448ce12fa771af2cbd~mv2.jpg/v1/fill/w_720,h_451,al_c,q_80,enc_auto/dutch-bucket.jpg' alt='infoImage' />
                    <p>
                        DUTCH BUCKET
                        GROW SYSTEM
                    </p>
                </div>
            </div>
            <div className={styles.start}>
                <h2>How to get started</h2>
                <p>
                    It's very simple.
                </p>
                <p>
                    Call us at +91-9020061000 or email us at info@bartonbreeze.com
                </p>
                <p>
                    Your call or email will be automatically routed to the available Relationship Manager,
                    who will be more than happy to assist you.
                </p>
                <button className={styles.button}>Contact Us</button>
            </div>
        </div>
    )
}
