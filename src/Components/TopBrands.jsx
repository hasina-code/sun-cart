import Image from "next/image";

const brands = [

  {
    id: 1,
    name: "SunShade",
    image: "https://i.ibb.co/vpv9Ng5/Sun-Shade.jpg",
  },

  {
    id: 2,
    name: "CoolBreeze",
    image: "https://i.ibb.co/TDBk0jh4/Handheld-Fan.jpg",
  },

  {
    id: 3,
    name: "SkinCare+",
    image: "https://i.ibb.co/DDnckRYn/Skin-Care.jpg",
  },

  {
    id: 4,
    name: "UrbanWear",
    image: "https://i.ibb.co/pB4CNzt0/Urban-Wear.jpg",
  },

];

const TopBrands = () => {

  return (

    <section className="max-w-7xl mx-auto px-4 py-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        Top Brands 
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {brands.map((brand) => (

          <div

            key={brand.id}

            className="border rounded-xl p-5 text-center hover:shadow-lg transition duration-300 animate__animated animate__zoomIn"
          >
            <div className="relative w-28 h-28 mx-auto mb-5 p-1 border-2 border-slate-50 rounded-full bg-slate-50 overflow-hidden
               animate__animated animate__pulse animate__infinite animate__slow">

              <Image
                src={brand.image}
                fill
                alt={brand.name}
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-sm font-semibold">
              {brand.name}
            </h3>
          </div>
        ))}

      </div>

    </section>

  );

};


export default TopBrands;