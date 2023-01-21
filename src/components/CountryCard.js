import React from "react";
import Records from "../components/records.json";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import "./countryCard.css";

function CountryCard() {
  return (
    <GridList className="country-card" cellHeight={375} cols={4}>
      {Records.map((record) => {
        return (
          <GridListTile
            className="country-card-img"
            cols={record.cols || 1}
            // key={record.id}
            // style={{
            //   backgroundImage: `url(${record.image})`,
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "contain",
            //   width: 300,
            //   height: 300,
            // }}
          >
            <img src={record.image} alt="text" />
            <GridListTileBar
              title={record.country}
              titlePosition="center"
              subtitle={<span>{record.city}</span>}
            />
          </GridListTile>
        );
      })}
    </GridList>
  );
}

export default CountryCard;
