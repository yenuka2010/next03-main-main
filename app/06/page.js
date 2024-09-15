import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Search from "../components/Search";

export default function Mission() {
  return (
    <div>
      <NavBar />
      <Search />

      <div className="space-y-8 px-6 py-8">
        {/* Tree Forms and Characteristics */}
        <section className="border-b-2 border-gray-300 pb-6">
          <h2 className="text-lg font-medium text-gray-900">Tree Forms and Characteristics:</h2>
          <ul className="mt-4 list-disc pl-5 text-gray-700">
            <li>
              <strong>Canopy Trees:</strong> Trees like Kapok and Mahogany that form the top layer of rainforests and provide shelter for countless species.
            </li>
            <li>
              <strong>Understory Trees:</strong> Smaller trees like Dogwood and Redbud that grow beneath the canopy, adapted to low-light conditions.
            </li>
            <li>
              <strong>Root Systems:</strong> Taproot vs. Fibrous: Explore the root systems of different trees. Taproots like that of the Oak grow deep into the soil, while fibrous roots like those of Birch spread horizontally.
            </li>
          </ul>
        </section>

        {/* Benefits of Trees and Plants */}
        <section className="border-b-2 border-gray-300 pb-6">
          <h2 className="text-lg font-medium text-gray-900">Benefits of Trees and Plants:</h2>
          <div className="mt-4 space-y-4 text-gray-700">
            <div>
              <h3 className="text-md font-semibold text-gray-800">Ecological Benefits:</h3>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Pollination and Seed Dispersal:</strong> Trees like willows and almonds are essential for supporting pollinators such as bees. Other trees rely on birds, wind, and animals to disperse their seeds.
                </li>
                <li>
                  <strong>Air Purification:</strong> Trees act as natural air filters, removing particulate matter from the air. Species like bamboo and ficus are known for improving indoor air quality.
                </li>
                <li>
                  <strong>Climate Regulation:</strong> Forests help regulate local climates by cooling the air, conserving moisture, and reducing temperature extremes.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold text-gray-800">Medicinal and Therapeutic Uses:</h3>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Aloe Vera:</strong> Known for soothing burns and cuts, Aloe Vera is rich in antioxidants and anti-inflammatory compounds.
                </li>
                <li>
                  <strong>Neem Tree (Azadirachta indica):</strong> Its leaves and seeds are used in traditional medicine for treating skin infections, dental care, and as a natural pesticide.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold text-gray-800">Cultural and Historical Importance:</h3>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Bodhi Tree (Ficus religiosa):</strong> Sacred in Buddhism, it is believed that Buddha attained enlightenment under this tree.
                </li>
                <li>
                  <strong>Yew Tree (Taxus baccata):</strong> Often found in churchyards in Europe, yews symbolize immortality and are associated with ancient burial rites.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Plant Growth Habits and Lifespan */}
        <section className="border-b-2 border-gray-300 pb-6">
          <h2 className="text-lg font-medium text-gray-900">Plant Growth Habits and Lifespan:</h2>
          <div className="mt-4 space-y-4 text-gray-700">
            <div>
              <h3 className="text-md font-semibold text-gray-800">Clonal Trees and Plants:</h3>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Pando (Populus tremuloides):</strong> A clonal colony of quaking aspen trees in Utah that is considered the world’s largest living organism by mass.
                </li>
                <li>
                  <strong>Creosote Bush (Larrea tridentata):</strong> Found in the deserts of North America, it can live for thousands of years through clonal growth.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conservation and Reforestation */}
        <section>
          <h2 className="text-lg font-medium text-gray-900">Conservation and Reforestation:</h2>
          <div className="mt-4 space-y-4 text-gray-700">
            <div>
              <h3 className="text-md font-semibold text-gray-800">Deforestation Statistics:</h3>
              <ul className="list-disc pl-5">
                <li>
                  Provide real-time data on deforestation rates globally, emphasizing the importance of protecting remaining forests, particularly in tropical regions like the Amazon and Congo Basin.
                </li>
                <li>
                  Offer educational resources about organizations that are actively working to combat deforestation, such as the World Wildlife Fund (WWF) and Rainforest Alliance.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold text-gray-800">Urban Reforestation:</h3>
              <ul className="list-disc pl-5">
                <li>
                  Discuss how urban areas can integrate trees into city planning to combat the urban heat island effect. Trees like London Plane and Ginkgo are commonly planted in urban landscapes due to their pollution tolerance.
                </li>
              </ul>
            </div>
          </div>
        </section>
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
