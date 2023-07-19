import "./App.css";
import Header from "./components/header/Header";
import FirstSection from "./components/first-section/FirstSection";
import SecondSection from "./components/second-section/SecondSection";
import ThirdSection from "./components/third-section/ThirdSection";
import FourthSection from "./components/fourth-section/FourthSection";
import FifithSection from "./components/fifth-section/FifithSection";
import Footer from "./components/footer/Footer";





function App() {
  return (
    <div className="App">
      <Header />    
      <FirstSection /> 
      <SecondSection />
      <ThirdSection />  
      <FourthSection />  
      <FifithSection />  
      <Footer />
    </div>
  );
}

export default App;
