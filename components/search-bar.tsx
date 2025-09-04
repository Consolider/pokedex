import styles from "./search-bar.module.css"
import Form from 'next/form'
import Image from "next/image";

export default function Page() {
  return (
    <div className={styles.container}>
      <Form action="/search">
        <input
          name="query"
          placeholder="Search for a pokèmon..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          <Image
            src="/Search.svg"
            alt="Search button"
            width={50}
            height={50}
            className={styles.image}
          />
        </button>
      </Form>
    </div>
  )}
