import{useState} from "react"
import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'


const Formulario = () => {
return(
    <section className='Formulario'>
        <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
                
            <CampoTexto 
            label = "Nome" 
            placeholder = "Digite seu nome"
            valor = {nome}
            aoAlterado = {valor => setName}
            />

            <CampoTexto label = "Cargo" placeholder  = "Digite seu cargo"/>
            <CampoTexto label = "Imagem" placeholder  = "Insira a url da imagem"/>

        </form>

    </section>
)
}

export default Formulario