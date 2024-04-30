import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div className="title-list">
      {data.map((item, index) => (
        <Tile
          key={index}
          name={item.name}
          description={item.description}
          className="tile-list-item tile"
        />
      ))}
    </div>
  );
};
