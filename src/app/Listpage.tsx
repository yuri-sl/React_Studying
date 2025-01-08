import styles from "../styles/homepage.module.css";
import Navbar from "./_components/navbar";
import SpellCard from "./_components/infoCard";
import List from "./_components/LIst";
import Evento from "./_components/evento";

export default function SpellsPage(){
    return(
        <main>
            <Navbar/>
            <SpellCard 
            SpName  ="FireBall"
            SpSchool ="Destruction"
            SpCost = "150"
            SpDesc = "Fires an intense ball of fire that explodes"
            />
            <List/>
            <Evento />
        </main>
    )
}