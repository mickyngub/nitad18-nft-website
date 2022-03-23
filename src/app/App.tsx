import styled from "styled-components/macro";
import { nitad18Background } from "src/assets";
import CanvasUniverse from "./CanvasUniverse";
import Footer from "src/ui/Footer";
import Hero from "./Hero";

const App = () => {
  return (
    <WrapperApp>
      <Hero />
      <Footer />
    </WrapperApp>
  );
};
const WrapperApp = styled.div`
  background: url(${nitad18Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* height: 100%; */
`;

export default App;
