import {
  About,
  Footer,
  Header,
  Skills,
  // Testimonials,
  Work,
} from "./container/index";

import Navbar from "./components/Navbar/Navbar";

import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
