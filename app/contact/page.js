import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";


export default function Mission() {
  return (
    <div>
      <NavBar />
      

      <a href="#" className="block">
  <img
    alt=""
    src="/123.jpg"
    className="h-64 w-full object-cover sm:h-80 lg:h-96"
  />

  <h3 className="mt-7 text-lg font-bold text-gray-900 sm:text-xl">CONTACT US</h3>

  <p className="mt-2 max-w-sm text-gray-700">
    You Can Contact us by 
   
  </p>

  <ul>
    <li>- Email =  <b>disnakotagama@gmail.com</b></li> 
    <li>- Phone =  0772270429</li>
    <li>- Address = No 18, Samanala uyana, Ogodapola, Boyagene, Kurunegala, Sri Lanka</li>
    </ul>
</a>

      <Footer />
    </div>
  );
}
