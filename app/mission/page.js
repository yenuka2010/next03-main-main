import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";


export default function Mission() {
  return (
    <div>
      <NavBar />
      

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="- Mission -"
                src="/image6.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl p-4">Mission</h2>
              <h5 className="text-lg font-bold">
                "Our mission is to educate and inspire people to connect with nature through the exploration of trees and plants, fostering an appreciation for their invaluable role in sustaining life on Earth."
              </h5>

              <a
                href="/"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Back
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
