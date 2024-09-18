import '../styles.css';
import Navbar from "./components/Navbar";
import OurProducts from "./components/ourproduct";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Search from "./components/Search";

export default function Home() {
  // Get the environment variable for the API URL
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div>
      <>
        {/* Render the Navbar */}
        <Navbar />
        
        {/* Render the Hero component */}
        <Hero />

        {/* Display the API URL */}
        <div>
          API URL: {apiUrl}
        </div>

        {/* Render the OurProducts component */}
        <OurProducts />

        {/* Render the Footer component */}
        <Footer />
      </>
    </div>
  );
}
