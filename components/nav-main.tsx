import Link from "next/link";
import Image from "next/image";
import data from "@/lib/data/pages.json";
import styles from "./nav-main.module.css";

export default async function NavMain() {
    return (
        <nav className="breakout flex items-center justify-between">
            <Link href={"/"} className="flex gap-4 items-center justify-between">
                <Image
                src="/Logo.png"
                alt="Logo"
                width={50}
                height={50}
                />
            <h2 className="text-3xl text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Pokédex</h2>
            </Link>
            
            <ul className="flex">
                {data["pages"].map((link, index) => (
                    <li key={index}>
                        <Link
                            className={styles.navMain}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}