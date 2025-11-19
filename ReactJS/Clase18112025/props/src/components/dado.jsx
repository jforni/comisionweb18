import '../styles/dado.css';

function Dado(props){
    return (
        <div className="dado-recuadro">{props.numero}</div>
    )
}

export default Dado;