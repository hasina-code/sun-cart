import { FaDroplet, FaSun, FaLeaf, FaAppleWhole } from "react-icons/fa6";

const tips = [
  {
    title: "Stay Hydrated",
    desc: "Drink at least 2–3 liters of water daily to prevent dehydration.",
    icon: <FaDroplet className="text-blue-300 animate__animated animate__pulse animate__infinite animate__slow" />,
    color: "bg-blue-50",
  },
  {
    title: "Use Sunscreen",
    desc: "Apply SPF 30+ sunscreen every 2-3 hours when outdoors.",
    icon: <FaSun className="text-orange-300 animate__animated animate__pulse animate__infinite animate__slow" />,
    color: "bg-orange-50",
  },
  {
    title: "Lightweight Skincare",
    desc: "Use gel-based moisturizers to avoid oily skin in summer.",
    icon: <FaLeaf className="text-green-300 animate__animated animate__pulse animate__infinite animate__slow" />,
    color: "bg-green-50",
  },
  {
    title: "Eat Fresh Fruits",
    desc: "Water-rich fruits like watermelon help keep your body cool.",
    icon: <FaAppleWhole className="text-red-300 animate__animated animate__pulse animate__infinite animate__slow" />,
    color: "bg-red-50",
  },
];

const SummerCareTips = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      
      <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeInDown">
        Summer Care Tips 
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className={`
              p-8 border-none rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 
              ${tip.color} group cursor-default
              animate__animated animate__backInUp
            `}
      
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Icon Section with Animation */}
            <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
              {tip.icon}
            </div>

            <h3 className="font-bold text-xl mb-3 text-gray-800">
              {tip.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              {tip.desc}
            </p>

            {/* Bottom Accent Line */}
            <div className="mt-4 h-1 w-0 group-hover:w-full bg-current transition-all duration-500 opacity-20"></div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SummerCareTips;