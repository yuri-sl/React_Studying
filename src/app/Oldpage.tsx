"use client";
import HelloWorldReact from "./_components/HelloWorldReact";
import HelloWorld from "./_components/HelloWorld";
import styles from "~/styles/homepage.module.css";
import Navbar from "./_components/navbar";
import SayMyName from "./_components/SayMyName";
import Pessoa from "./_components/Person";

export  default function HomePage() {

  const name = "Dragonborn";

  return (
    <main className={styles.main}>
      <Navbar />
      <HelloWorld />
      <h1>Welcome back, {name}</h1>
      <h3>This is a third level header</h3>
      <HelloWorldReact />
      <SayMyName nome="Arturo Plateado" />
      <SayMyName nome={name}/>
      <Pessoa nome="ArturoPlateado" idade = "500" profissao="Arrankar" />
    </main>
  )
}
