import { useEffect, useState } from "react";
import { checkMoveBall, stylesBall } from "./constants";

function App() {
  // USESTATE
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // INVOCO FUNCION PARA DAR ESTILOS A BOLA
  const STYLES_BALL = stylesBall(position.x, position.y);

  // USEEFFECT CLASSNAME
  useEffect(()=>{
    document.body.classList.toggle("no-cursor", enable);

    return ()=>{
      document.body.classList.remove("no-cursor");
    }
  })

  // USEEFFECT MOVE MOUSE
  useEffect(() => {
    // SIEMPRE DENTRO DEL EFECT
    const handleMouse = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    checkMoveBall(enable, handleMouse); //FUNCION QUE CHECKEA SI LA BOLA SE DEBE MOVER

    // CleanUp
    // Cuando un componente se desmonta
    // Cuando cambian las dependencias antes de ejecutar
    return () => {
      window.removeEventListener("pointermove", handleMouse);
    };
  }, [enable]);

  return (
    <>
      <main>
        <div style={STYLES_BALL}></div>
        <button onClick={() => setEnable(!enable)} type="button">
          {`${enable ? "Desactivar" : "Activar"}`} seguir puntero
        </button>
      </main>
    </>
  );
}

export default App;
