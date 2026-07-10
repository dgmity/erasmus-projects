import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Header
        title="Daily news"
        nav1="Home"
        nav2="Sports"
        nav3="Technology"
        nav4="Contact"
      />

      <Hero 
        headline="Breaking News"
        description="A new AI technology is changing the future of education."
      />

      <Sidebar 
        title="Latest News"
        item1="Football World Cup"
        item2="Stock Market Update"
        item3="Weather Forecast"
      />

      <Footer 
        text="Daily News. All Rights Reserved."
      />
    </div>
  );
}

export default App
