import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen from "./container/screen/Screen.js";
import Home from "./container/component/home/Home.js";
import Contact from "./container/component/contact/Contact.js";
import About from "./container/component/about/About.js";
import Services from "./container/component/services/Services.js";
import Esg from "./container/component/Esg/esg.js";
import Temp from "./container/component/home/homeComponent/homeSection.js"
import Activity from "./container/component/Activity.js";
import Branch from "./container/component/molecules/Branch.js";

function App() {
  return (
    <BrowserRouter>
        <Screen>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/commitment-to-esg" element={<Esg />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/branch" element={<Branch />} />
            
          </Routes>
        </Screen>
      </BrowserRouter>
  );
}

export default App;
