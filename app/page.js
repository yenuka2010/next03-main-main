import '../styles.css';
import Navbar from "./components/Navbar";
import OurProducts from "./components/ourproduct";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Search from "./components/Search";

import Hi from './components/h1';




export default function Home() {
  return (
    <div>
      <>
        <Navbar />
        <Search />
        <Hero />
        <OurProducts />
        <Footer />
      </>
    </div>
  );
}
