import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Search from "../components/Search";


export default function Mission() {
  return (
    <div>
      <NavBar />
      <Search />
      
      {/* Various Plant Species */}
      <section className="border-b-2 border-gray-300 pb-6">
          <h2 className="text-xl font-bold text-gray-900">Various Plant Species</h2>
          <details className="group border-l-4 border-blue-500 bg-gray-50 p-4 mt-4">
            <summary className="cursor-pointer font-medium text-gray-900">
              Expanding Flowering Plants
            </summary>
            <div className="mt-4 space-y-6">
              {/* Flowering Plants */}
              <h3 className="text-lg font-semibold text-blue-700">Flowering Plants:</h3>
              <ul className="list-disc ml-6">
                <li><strong>Orchids (Orchidaceae family):</strong> With over 25,000 species, orchids thrive in tropical rainforests and have complex pollination mechanisms.</li>
                <li><strong>Sunflowers (Helianthus annuus):</strong> Known for their bright yellow blooms that follow the sun’s movement, also used for oil and seed production.</li>
                <li><strong>Lotus (Nelumbo nucifera):</strong> A sacred flower in many cultures, the lotus symbolizes purity and enlightenment, often found in wetlands.</li>
              </ul>

              {/* Carnivorous Plants */}
              <h3 className="text-lg font-semibold text-blue-700">Carnivorous Plants:</h3>
              <ul className="list-disc ml-6">
                <li><strong>Venus Flytrap (Dionaea muscipula):</strong> Captures insects with its modified leaves that snap shut when triggered.</li>
                <li><strong>Pitcher Plant (Nepenthes spp.):</strong> Deep, pitcher-shaped leaves trap insects, digesting them for nutrients in poor soil conditions.</li>
              </ul>

              {/* Ferns */}
              <h3 className="text-lg font-semibold text-blue-700">Ferns:</h3>
              <ul className="list-disc ml-6">
                <li><strong>Staghorn Fern (Platycerium spp.):</strong> An epiphytic fern that grows on trees in tropical climates, known for its antler-shaped fronds.</li>
                <li><strong>Maidenhair Fern (Adiantum spp.):</strong> Delicate fern species that thrive in moist, shaded environments.</li>
              </ul>
            </div>
          </details>
          </section>

          <a
                href="/"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Back
              </a>
      <Footer />
    </div>
  );
}
