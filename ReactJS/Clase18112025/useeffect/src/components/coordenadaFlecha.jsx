import { useState, useEffect } from "react";

function CoordenadaFlecha() {
  const[position, setPosition] = useState({x:0, y: 0});

  useEffect(() => {
    window.addEventListener('mousemove', fijarPosicion)
    return () => {
        window.removeEventListener('mousemove', fijarPosicion)
        console.log('Se borró el registro de eventos')
    }
  }, []);

  function fijarPosicion(e){
    setPosition({x: e.clientX, y: e.clientY})
  }
  return(
    <div>
      <p>{position.x} - {position.y}</p>
    </div>
  )

}

export default CoordenadaFlecha;