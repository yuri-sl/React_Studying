export default function Form(){
    function cadastrarPessoa(e){
        e.preventDefault()
        console.log("Usuario Cadastrado!");
    }
    
    return(
        <div>
            <h1>Meu cadastro</h1>
            <form>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}