import React from 'react';

const UserPackIndex = ({packs}) => {
  let packsArr = Object.values(packs);
  return (
    <ul>
      {packsArr.map(pack => {
        return (
          <li key={pack.id}>
            <h2>{pack.title}</h2>
            <img src={pack.thumbnailUrl} />
          </li>
        );
      })}
    </ul>
  );
}

export default UserPackIndex;