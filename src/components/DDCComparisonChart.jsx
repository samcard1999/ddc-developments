import { motion } from "framer-motion";

const steps = [
  "Need Identified",
  "Project Funding",
  "Construction",
  "Revenue Generation"
];

export default function DDCComparisonChart() {
  return (
    <section className="bg-black text-white px-6 py-16">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-12">
        DDC Modular vs. Traditional Construction
      </h2>

      <div className="space-y-16 max-w-7xl mx-auto">
        {/* Modular Construction */}
        <div>
          <h3 className="text-lg md:text-xl mb-2">DDC Modular Construction</h3>
          <div className="relative h-4 w-full bg-red-600 rounded-full overflow-hidden">
            <div className="absolute left-1/4 h-full bg-white w-1/4"></div>
            <motion.div
              className="absolute left-1/2 h-full bg-green-500 w-1/2"
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 2 }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-300 mt-2">
            {steps.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>

        {/* Traditional Construction */}
        <div>
          <h3 className="text-lg md:text-xl mb-2">Traditional Construction</h3>
          <div className="relative h-4 w-full bg-red-600 rounded-full overflow-hidden">
            <div className="absolute left-2/3 h-full bg-white w-1/3"></div>
            <motion.div
              className="absolute left-[calc(100%-1px)] h-1 bg-green-500 w-0"
              animate={{ width: "1px" }}
              transition={{ duration: 2 }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-300 mt-2">
            {steps.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
