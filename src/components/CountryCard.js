import React from "react";
import Records from "../components/records.json";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
import "./countryCard.css";
import { Container, Row, Col } from "react-bootstrap";

function CountryCard() {
  return (
    <Container className="container">
      <Row className="country-card-grid">
        {Records.map((record) => {
          return (
            <Col className={record.className}>
              <div
                className="country-card-row"
                style={{
                  backgroundImage: `url(${record.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "8px",
                  display: "flex",
                }}
              >
                <div className="country-title">
                  <h5>{record.country}</h5>
                  <h3>{record.city}</h3>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default CountryCard;
