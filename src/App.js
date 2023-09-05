import "./App.css";
import Header from "./components/header";
import SecondSection from "../src/components/secondsection";
import Footer from "../src/components/footer";
import TravelHelpSquad from "../src/components/travelhelpsquad";
import CardSectionthree from "./components/cardsection";
import CardInsurance from "./components/carinsurance";
import DrivingTestSection from "./components/drivingtestsection";
import "./fonts.css";
import OurOffers from "./components/our-offers/our-offers";

function App() {
  return (
    <div className="App">
      <Header />
      <SecondSection />
      <br />
      <OurOffers/>
       <Footer />
    </div>
  );
}

export default App;
