import React from 'react';
import PackTile from '../pack_tiles/pack_tile';
import UserPackTile from '../pack_tiles/user_pack_tile';

const PacksList = ({displayPacks, category }) => {

  displayPacks = displayPacks.filter((pack) => pack.categoryId == category.id) 

    return (
      <div className="innerBox">
        {displayPacks.map(pack => {
          if (pack.userId) {
            return (
              <UserPackTile key={pack.id} pack={pack} userPack={pack}/>
              );
            } else {
              return (
              <PackTile key={pack.id} pack={pack} />
            );
          }
        })}
      </div>

    )

}

export default PacksList;