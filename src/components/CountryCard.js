import React from "react";
import Records from "../components/records.json";
import "./countryCard.css";
import { Container, Row, Col } from "react-bootstrap";

function CountryCard() {
  return (
    <Container className="container">
      <Row className="country-card-grid">
        {Records.map((record) => {
          return (
            <Col className={record.className} key={record.id}>
              <div
                className="country-card-row"
                style={{
                  backgroundImage: `url(${record.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  borderRadius: "8px",
                  display: "flex",
                }}
              >
                <div className="country-title">
                  <h1>{record.country}</h1>
                  <h2>{record.city}</h2>
                  <p className="country-detail">{record.details}</p>
                  <a href="#" className="country-detail explore-button">
                    Explore More
                  </a>
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
