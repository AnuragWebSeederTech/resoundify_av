// import Image from "next/image";

export default function WeCraftedCard({ title, logo, description, goal, stat }) {
  return (
    <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {logo && (
          <div className="relative w-16 h-16 mr-4 flex-shrink-0">
            {/* <Image
              src={logo}
              alt={`${title} logo`}
              layout="fill"
              objectFit="contain"
              className="rounded-full" // Added for circular logos, adjust as needed
            /> */}
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-3">
        <p className="text-sm font-medium text-gray-700">
          <span className="font-semibold">Goal:</span> {goal}
        </p>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-700">
          <span className="font-semibold">Stat:</span> {stat}
        </p>
      </div>
    </div>
  );
}