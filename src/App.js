import logo from "./logo.svg";
import "./App.css";
import { InfoBar } from "./components/InfoBar";
import { Navbar } from "./components/Navbar";
import { Jumbotron } from "./components/Jumbotron";
import { HowItWorks } from "./components/HowItWorks";
import { Table } from "./components/Table";
import { FAQ } from "./components/FAQ";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <InfoBar />
      <Navbar />
      <Jumbotron />
      <HowItWorks />
      <Table />
      <FAQ />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
