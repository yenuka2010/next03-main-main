import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Search from "../components/Search";

export default function Mission() {
  return (
    <div>
      <NavBar />
      <Search />

      <div className="space-y-4 px-6 py-8">
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
