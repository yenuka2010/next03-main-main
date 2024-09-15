import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";


export default function Mission() {
  return (
    <div>
      <NavBar />
      
      <h1 className="mt-7 text-[58px] font-bold text-gray-900 sm:text-[58px] font-serif">
  Gallery
</h1>


      <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://i.pinimg.com/originals/ed/c3/fa/edc3fa4b39dc11d55440af0335e909a8.jpg" // Local image path
          alt="Image 1"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://pics.craiyon.com/2023-11-10/HBKtuufYRVi6K80nYmmMLw.webp" // Local image path
          alt="Image 2"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://wildlife.org.au/wp-content/uploads/2024/03/Secret-life-of-trees-article-1180-x-560-px.jpg" // Local image path
          alt="Image 3"
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://extension.unh.edu/sites/default/files/styles/max_width_480px/public/migrated_images/trees.jpg?itok=b-gZXROM" // Local image path
          alt="Image 4"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUePR3eG81Sjwj7OF-R5rN3QuhgiZE5gK7Q&s" // Local image path
          alt="Image 5"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://media.istockphoto.com/id/489383522/photo/beautiful-waterfall-in-green-forest-in-jungle.jpg?s=612x612&w=0&k=20&c=RchNd4P8NcOLTWFEGhfng119QDw0Em38v4CYDGFtrTY=" // Local image path
          alt="Image 6"
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg" // Local image path
          alt="Image 7"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAqc8hFkMGju9ftH_Tk9Pn0tUJ0fKOCkLKQ&s" // Local image path
          alt="Image 8"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://previews.123rf.com/images/twinborg/twinborg1902/twinborg190200006/117941100-train-tracks-through-the-forest.jpg" // Local image path
          alt="Image 9"
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://img.freepik.com/free-photo/beautiful-japanese-forest-scene_23-2151498109.jpg" // Local image path
          alt="Image 10"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://assets.weforum.org/article/image/qGgfxhM2PU3tyvAFoc-5FDTxmVY5sDcL8JSIo5Kj4aI.jpg" // Local image path
          alt="Image 11"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://eng.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_A12-00245_1.jpg&sizetype=3" // Local image path
          alt="Image 12"
        />
      </div>
    </div>
  </div>
      </section>

      <Footer />
    </div>
  );
}
