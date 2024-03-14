import { useState } from 'react'
import './App.css'

function App() {

  const [colors, setColor] = useState(["#0000FF","#FF0000","#FFFF00","#008000"]);

  return (
    <>
      <div className='header'>
        <h1>SIMON SUPER</h1>
      </div>

      <div className='container'>
        {colors.map((color, index) => {
          return <div key={index} className= {`pad pad-${index}`} style={{backgroundColor:`${color}`}}></div>
        })}
      </div>

     </> 
  )
}

export default App

/*
1.Interfaz de cartón.
2.Detectar Click en los componenttes.
3.Crear array para almacenar la secuencia del juego.
4.Crear el color random para añadirlo a la secuencia.
5.Reproducir la secuencia -- HARD.
6.Usuario intenta reproducir secuencia.
7.Validar secuencia usurario por cada pulsación.
8.Si acierta la publicacion sigue el juego.
9.
*/