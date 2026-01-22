import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.copy}>
                    &copy; {new Date().getFullYear()} Trips & Trails. Documenting memories.
                </p>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/contributors" className={styles.link}>Team</Link>
                </div>
            </div>
        </footer>
    );
}
