import { useState, useEffect } from "react";
import { Button } from "./Button";
import PropTypes from "prop-types";
export function ListFollow({ formatUserName, userName, name, initialIsFollowing }) {
  const imageProfile = `https://unavatar.io/${userName}`;

  //Usos de useState
  const [follow, setFollow] = useState('');
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const btnClassName = !isFollowing ? 'btn btn-followed' : 'btn btn-followed is-following';

  //  Uso de useEffect para renderizados
  useEffect(() => {
    setFollow(isFollowing ? 'Siguiendo' : 'Seguir'); //Dependiendo del boolean cambiara el texto.
  }, [isFollowing]);

  const handleClickFriend = () => {
    setIsFollowing(!isFollowing); //Pasar al valor contrario una vez que se ejecuta la funcion
  }

  // Retornar vista
  return (
    <li className="tw-followed-list__item d-flex ai-center jc-b g-1">
      <header className="tw-followed-list__data-profile d-flex ai-center jc-center g-1">
        <img src={imageProfile} alt={`Imagen de perfil de ${name}`} />
        <div className="tw-followed-list__data-profile__desc d-flex f-col  jc-center">
          <strong>{name}</strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside className="tw-followed-aside" >
        <Button handle={handleClickFriend} className={btnClassName} text={follow} initialIsFollowing={isFollowing} />
      </aside>
    </li>
  );
}

ListFollow.propTypes = {
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  formatUserName: PropTypes.func.isRequired,
  initialIsFollowing: PropTypes.bool.isRequired
};
