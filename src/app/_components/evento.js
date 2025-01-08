export default function Evento({ numero }){
    
    function meuEvento(){
        console.log('Eae meu chapa! ${numero}');
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativaaaar!</button>
        </div>
    )

}