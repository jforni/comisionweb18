import './App.css'

function App() {
  function SumarNumeros(e) {
    e.preventDefault();
    const num1 = parseInt(e.target.valor1.value, 10);
    const num2 = parseInt(e.target.valor2.value, 10);
    const num3 = parseInt(e.target.valor3.value, 10);
    const suma = num1 + num2 + num3;
    alert(`La suma de ${num1}, ${num2} y ${num3} es: ${suma}`);
  }

  return (
    <>
      <form onSubmit={SumarNumeros}>
        <p>Ingrese el primer valor: 
          <input type="number" name="valor1" id="" />
        </p>
        <p>Ingrese el segundo valor: 
          <input type="number" name="valor2" id="" />
        </p>
        <p>Ingrese el tercer valor: 
          <input type="number" name="valor3" id="" />
        </p>
        <div>
          <input type="submit" value="Sumar" />
        </div>
      </form>
    </>
  )
}

export default App
