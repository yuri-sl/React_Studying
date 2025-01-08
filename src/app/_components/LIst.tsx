import Item from "./itemlist";

export default function List(){
    return(
        <>
            <h1>Ola isso é a List</h1>
            <ul>
                <Item spName="Frostbite" spSchool={"Destruction"}/>
                <Item spName="Flames" spSchool={"Destruction"}/>
                <Item spName="Sparks" spSchool={"Destruction"}/>
            </ul>
        </>
    )
}