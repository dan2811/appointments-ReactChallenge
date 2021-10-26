import React from "react";

export const Tile = ({ tile }) => {

  return (
    <div className="tile-container">
      {console.log(tile)}
      {
       Object.values(tile).map(
         (value, idx) => {
          return <p key={idx} >{value}</p>
         }
       )
      }
    </div>
  );
};
