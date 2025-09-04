import styles from "./card.module.css"
import Image from "next/image";

export default async function CardEmpty() {

return (
  <div className={`${styles.card} grid grid-cols-[repeat(auto-fit,minmax(15ch,27ch))] content-stretch justify-center">`}>
    <div className={styles.card__content}>
      <Image
        className="border border-electric"
        src="/Dice3.png"
        alt="empty pokemon"
        width={150}
        height={150}
      />
        <p className="id id-electric">#?</p>
        <h3 className={styles.card__title}>?</h3>
        <div className={styles.card__tag_container}>
            <p className="badge badge-electric">?</p>
        </div>
    </div>
    <footer className={styles.card__footer}>
        <ul>
            <li>HP</li>
            <li>Attack</li>
            <li>Defense</li>
        </ul>
        <ul>
            <li>?</li>
            <li>?</li>
            <li>?</li>
        </ul>
    </footer>
  </div>
)};
