//rfce

import React from 'react';
import styles from './Header.module.css';
import resumesvg from "./../assets/resume.svg";

function Header() {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.left}>
        <p className={styles.heading}>
            A <span>Resume</span> That stands out!
        </p>
        <p className={styles.heading}>
            Make your Resume <span>It's Free!!</span>
        </p>
        </div>
        <div className={styles.right}>
            <img src={resumesvg} alt="Resume" />
        </div>
    </div>
    </>
  )
}

export default Header
