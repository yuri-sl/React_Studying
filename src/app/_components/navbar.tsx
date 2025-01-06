import styles from "~/styles/navbarMain.module.css"

export default function Navbar () {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="~/layout.tsx">Introdução</a>
                </li>
                <li>
                    <a>Habilidades</a>
                </li>
                <li>
                    <a>Guildas</a>
                </li>
            </ul>
        </nav>
    )

}