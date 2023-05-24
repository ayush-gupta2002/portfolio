import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Socials from "./components/Socials";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <SocialLinks></SocialLinks>
      <About></About>
      <Portfolio></Portfolio>
      <Socials></Socials>

      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
