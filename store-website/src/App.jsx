import ProductsList from "./ProductsList/ProductsList";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";

function App() {
  const products = [
    { name: "Laptop", price: 800, image: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8NTM3NDkwfGltYWdlL3BuZ3xoZWYvaDhjLzEzNzIyOTMzMDAyMjcwLnBuZ3w5YmM0Y2NiNDJhZjU0ZDMyNGFkYTJlNjU4ZmE1MGExZmNkMjQ3MmJhZjEyMGViNzhlYmJlM2RiNTQ2YWUxYmJm/lenovo-laptops-thinkpad-t14-gen-3-14-intel-hero.png"},
    { name: "Phone" ,price: 500, image: "https://www.backmarket.pt/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/c7092a5f-eaf9-402b-b303-2eafd941df3e.jpg"},
    { name: "Headphone", price: 100, image: "https://www.powerplanetonline.com/cdnassets/eara01_l_sf.webp"}
  ];

  return (
    <div>
      <Header />
      <Hero />
      <ProductsList products = {products}/>
      <Footer />
    </div>
    
  );
}

export default App;