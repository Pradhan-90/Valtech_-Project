import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Carousel } from 'antd';
import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";

function CarouselCard() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const apiRoot = "https://pixabay.com";
    axios
      .get(
        `${apiRoot}/api/?key=33003845-738ffc1d3581f30f899f9b938&q=sunset+forest&image_type=photo`
      )
      .then((res) => setImages([...images, ...res.data.hits]));
  }, []);
  return (
    <div>
      <Carousel fade>
        {images.map((image) => (
          <Carousel.Item className="carousel-img">
            <img
              src={image.largeImageURL}
              className="d-block w-100"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>FRONT-END</h5>
              <h3>valtech_</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselCard;
