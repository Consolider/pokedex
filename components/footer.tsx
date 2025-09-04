import styles from "./footer.module.css"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
            <Image
                src="/Logo.png"
                alt="Pokédex logo"
                width={50}
                height={50}
            />
            <h3>Pokédex</h3>
            </div>

            <p className={styles.text}>Explore the world of Pokémon</p>
            
            <div className={styles.icons}>
                <Image
                    src="/Facebook.svg"
                    alt="Facebook logo"
                    width={40}
                    height={40}
                />
                <Image
                    src="/Instagram.svg"
                    alt="Instagram logo"
                    width={40}
                    height={40}
                />
            </div>
        </footer>
    )
}