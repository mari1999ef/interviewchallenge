import React from 'react';
import logo from '../../assets/img/svg/logo.png';
import styles from './styles.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.navbar_logo} />
      <h2 className={styles.navbar_title}>Tenet Up</h2>
    </div>
  );
}

export default Navbar;
