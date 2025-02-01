import { ListFollow } from './ListFollow';
import PropTypes from 'prop-types';

export function TwitterFollowedCard ({ formatUserName }) {
  // arreglo de usuarios simulando base de datos
  const users = [
    {
      userName: 'BraianP333000',
      name: 'Braian Palacios',
      isFollowing: false
    },
    {
      userName: 'Jmilei',
      name: 'Javier Milei',
      isFollowing: true

    },
    {
      userName: 'MrBeast',
      name: 'MrBeast',
      isFollowing: true

    },
    {
      userName: 'Madorni',
      name: 'Manuel Adorni',
      isFollowing: false

    },
    {
      userName: 'PatoBullrich',
      name: 'Patricia Bulrich',
      isFollowing: true

    }
  ];

  return (
    <article className="tw-followed-article d-flex f-col jc-center">
      <h2 className="tw-followed-article__title">A quién seguir</h2>
      <div className="divisor"></div>
      <ul className="tw-followed-list d-flex f-col g-1 ai-center">
        {users.map(({ userName, name, isFollowing }, i) => {
          return <ListFollow key={i} userName={userName} name={name} formatUserName={formatUserName} initialIsFollowing={isFollowing}/>;
        })}
      </ul>
    </article>
  );
}

TwitterFollowedCard.propTypes = {
  formatUserName: PropTypes.func.isRequired
};
