import spellStyle from "~/styles/spellcard.module.css"

export default function spellCard({SpName,SpSchool,SpCost,SpDesc}){
    return(
        <main className={spellStyle.main}>
            <ul>
                <li>
                    <h1>{SpName}</h1>
                </li>
                <li>
                    <h2>{SpSchool}</h2>
                </li>
            </ul>
                    <h3>{SpCost}</h3>
            <p>{SpDesc}</p>
        </main>

    )
}