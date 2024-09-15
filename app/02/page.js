import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Search from "../components/Search";

export default function Mission() {
  return (
    <div>
      <NavBar />
      <Search />

      <div className="space-y-4 px-6">
        <details
          className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Expanding Tree Categories:
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div className="mt-4 leading-relaxed text-gray-700 space-y-6">
            {/* Temperate Trees */}
            <h3 className="text-md font-semibold text-green-700">Temperate Trees:</h3>
            <ul className="list-disc ml-6">
              <li><strong>Beech (Fagus sylvatica):</strong> Common in European forests, with smooth grey bark and oval leaves. Beeches are often found in well-drained soils and produce nuts that are food for wildlife.</li>
              <li><strong>Chestnut (Castanea spp.):</strong> Valued for its edible nuts, chestnut wood is also resistant to decay.</li>
            </ul>

            {/* Coniferous Trees */}
            <h3 className="text-md font-semibold text-green-700">Coniferous Trees:</h3>
            <ul className="list-disc ml-6">
              <li><strong>Douglas Fir (Pseudotsuga menziesii):</strong> Known for its towering height and use in construction and paper production.</li>
              <li><strong>Sequoia (Sequoiadendron giganteum):</strong> One of the oldest and largest tree species, found in California, capable of living over 3,000 years.</li>
            </ul>

            {/* Mediterranean Trees */}
            <h3 className="text-md font-semibold text-green-700">Mediterranean Trees:</h3>
            <ul className="list-disc ml-6">
              <li><strong>Olive Tree (Olea europaea):</strong> Widely cultivated for its fruit, olive trees are drought-resistant and live for centuries.</li>
              <li><strong>Cork Oak (Quercus suber):</strong> Known for its thick, protective bark, which is harvested for cork production.</li>
            </ul>

            {/* Mangroves */}
            <h3 className="text-md font-semibold text-green-700">Mangroves:</h3>
            <ul className="list-disc ml-6">
              <li><strong>Red Mangrove (Rhizophora mangle):</strong> Found along coastal areas, mangroves play a crucial role in preventing coastal erosion and providing habitat for marine life.</li>
            </ul>

            {/* Exotic Trees */}
            <h3 className="text-md font-semibold text-green-700">Exotic Trees:</h3>
            <ul className="list-disc ml-6">
              <li><strong>Jacaranda (Jacaranda mimosifolia):</strong> Known for its stunning purple flowers, found in tropical and subtropical regions.</li>
              <li><strong>Dragon Tree (Dracaena cinnabari):</strong> A unique tree from the Socotra archipelago with umbrella-shaped branches and red sap known as "dragon's blood."</li>
            </ul>

            {/* Tree Forms and Characteristics */}
            <h3 className="text-md font-semibold text-green-700">Tree Forms and Characteristics:</h3>
            <ul className="list-disc ml-6">
              <li><strong>Canopy Trees:</strong> Trees like Kapok and Mahogany that form the top layer of rainforests and provide shelter for countless species.</li>
              <li><strong>Understory Trees:</strong> Smaller trees like Dogwood and Redbud that grow beneath the canopy, adapted to low-light conditions.</li>
              <li><strong>Root Systems:</strong> Taproot vs. Fibrous: Taproots like that of the Oak grow deep into the soil, while fibrous roots like those of Birch spread horizontally.</li>
            </ul>
          </div>
        </details>
      </div>
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
