'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                Trips & Trails
            </Link>
            <div className={styles.navLinks}>
                <Link href="/" className={styles.navLink}>
                    Destinations
                </Link>
                <Link href="/contributors" className={styles.navLink}>
                    Contributors
                </Link>
            </div>
        </nav>
    );
}
