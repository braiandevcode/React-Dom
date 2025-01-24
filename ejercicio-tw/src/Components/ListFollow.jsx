import { Button } from "./Button";
import PropTypes from "prop-types";
export function ListFollow({ formatUserName , userName, name }) {
  const imageProfile = `https://unavatar.io/${userName}`;

  return (
      <li className="tw-followed-list__item d-flex ai-center jc-b">
        <header className="tw-followed-list__data-profile d-flex ai-center jc-center g-1">
          <img src={imageProfile} alt={`Imagen de perfil de ${name}`} />
          <div className="tw-followed-list__data-profile__desc d-flex f-col  jc-center">
            <strong>{name}</strong>
            <span>{formatUserName(userName)}</span>
          </div>
        </header>
        <aside className="tw-followed-aside">
          <Button className="btn btn-followed" text={"Seguir"} />
        </aside>
      </li>
      
  );
}


ListFollow.propTypes = {
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  formatUserName: PropTypes.func.isRequired,
};
