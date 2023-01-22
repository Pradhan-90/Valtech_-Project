import "./App.css";
import CarouselCard from "./components/Carousel";
import CountryCard from "./components/CountryCard";

function App() {
  return (
    <div className="App">
      <CarouselCard
        heading="FRONT-END"
        title="valtech_"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore"
      />
      <CountryCard />
    </div>
  );
}

export default App;
