import Link from "next/link";
import styles from './Footer.module.scss'

export const Footer = () => <footer className={styles.footer}>
    <b aria-hidden="true">@ 2024 DevQuest</b>
    {" - "}
    <Link href={"/mentions-legales"}>Mentions légales</Link>
    {" - "}
    <Link href={"/code-de-conduite"}>Code de conduite</Link>
</footer>;