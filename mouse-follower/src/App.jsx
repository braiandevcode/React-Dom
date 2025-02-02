import { useEffect, useState } from 'react';
import { checkMoveBall } from './constants';
import { FollowMove } from './Components/FolloweMove';

// APP
function App () {
  // USESTATE
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // USEEFFECT CLASSNAME
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable);

    // CleanUp
    return () => {
      document.body.classList.remove('no-cursor');
    };
  });

  // USEEFFECT MOVE MOUSE
  useEffect(() => {
    // SIEMPRE DENTRO DEL EFECT
    const handleMouse = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    checkMoveBall(enable, handleMouse); // FUNCION QUE CHECKEA SI LA BOLA SE DEBE MOVER

    // CleanUp
    // Cuando un componente se desmonta
    // Cuando cambian las dependencias antes de ejecutar
    return () => {
      window.removeEventListener('pointermove', handleMouse);
    };
  }, [enable]);

  return (
    <>
      <main>
        <FollowMove position={position} enable={enable} updatedStateEnable={setEnable}/>
      </main>
    </>
  );
}

export default App;
