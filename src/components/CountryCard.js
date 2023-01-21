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
