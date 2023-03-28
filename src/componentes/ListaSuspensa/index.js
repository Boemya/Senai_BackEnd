import'./ListaSuspensa.css'
const ListaSuspensa = (props) => {
    console.log (props)
    return(
        <div className ='Lista-Suspensa'>
            <label>{props.label}</label>
            <select onChange = {evento => props.aoAlternado(evento.target.value)}>

            </select>
        </div>


    )
}
export default ListaSuspensa