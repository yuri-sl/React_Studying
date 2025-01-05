"use client";
import HelloWorldReact from "./_components/HelloWorldReact";
import HelloWorld from "./_components/HelloWorld";
import styles from "~/styles/homepage.module.css";

export  default function HomePage() {

  return (
    <main className={styles.main}>
      <HelloWorld />
      <h3>This is a third level header</h3>
      <HelloWorldReact />

    </main>
  )
}
