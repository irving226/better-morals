import Link from "next/link";

export default function AICardSection() {
  return (
    <>
      {/* Adjust the top margin of your services section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-[#e0f7fa] to-[#e8f5e9]">
        {/* Floating organic shapes that complement the green aesthetic */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-[#b2dfdb]/40 to-[#4db6ac]/30 blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#c8e6c9]/30 to-[#81c784]/20 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-[#b3e5fc]/20 to-[#4fc3f7]/10 blur-3xl"></div>

        {/* Container for cards */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00695c] mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#009688] to-[#00bfa5] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Enhanced Glass Morphism Card */}
            <div className="rounded-2xl overflow-hidden relative group">
              {/* Glass Effect with enhanced transparency and blur */}
              <div className="absolute inset-0 backdrop-blur-2xl bg-white/70 border border-white/80 shadow-lg rounded-2xl transition-all duration-300 group-hover:bg-white/80"></div>

              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-2 rounded-xl opacity-30 bg-gradient-to-br from-white/60 via-transparent to-transparent"></div>

              {/* Accent light reflection */}
              <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#4db6ac]/40 to-[#00bfa5]/30 blur-md transition-all duration-300 group-hover:scale-110"></div>

              {/* Content */}
              <div className="relative p-8 h-full">
                <h3 className="text-xl font-semibold mb-4 text-[#00695c]">
                  Eco-Conscious Strategy
                </h3>
                <p className="text-[#2e7d32]/90">
                  Develop sustainable brand strategies that position your
                  business for long-term success while minimizing environmental
                  impact.
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-[#009688] to-[#00bfa5] mt-6 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </div>

            {/* Second Glass Card */}
            <div className="rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 backdrop-blur-2xl bg-white/70 border border-white/80 shadow-lg rounded-2xl transition-all duration-300 group-hover:bg-white/80"></div>
              <div className="absolute inset-2 rounded-xl opacity-30 bg-gradient-to-br from-white/60 via-transparent to-transparent"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#81c784]/40 to-[#66bb6a]/30 blur-md transition-all duration-300 group-hover:scale-110"></div>

              <div className="relative p-8 h-full">
                <h3 className="text-xl font-semibold mb-4 text-[#00695c]">
                  Sustainable Content
                </h3>
                <p className="text-[#2e7d32]/90">
                  Create engaging, environmentally-conscious content that
                  resonates with modern audiences while supporting your green
                  initiatives.
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-[#4caf50] to-[#81c784] mt-6 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </div>

            {/* Third Glass Card */}
            <div className="rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 backdrop-blur-2xl bg-white/70 border border-white/80 shadow-lg rounded-2xl transition-all duration-300 group-hover:bg-white/80"></div>
              <div className="absolute inset-2 rounded-xl opacity-30 bg-gradient-to-br from-white/60 via-transparent to-transparent"></div>
              <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#4fc3f7]/40 to-[#29b6f6]/30 blur-md transition-all duration-300 group-hover:scale-110"></div>

              <div className="relative p-8 h-full">
                <h3 className="text-xl font-semibold mb-4 text-[#00695c]">
                  Green Tech Marketing
                </h3>
                <p className="text-[#2e7d32]/90">
                  Leverage eco-friendly digital marketing strategies that
                  maximize your reach while minimizing carbon footprint.
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-[#26c6da] to-[#4fc3f7] mt-6 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </div>
          </div>

          {/* Button with matching aesthetic */}
          <div className="text-center mt-12">
            <div className="inline-block relative group">
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#00897b] to-[#00bfa5] blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <button className="relative px-8 py-3 bg-gradient-to-r from-[#009688] to-[#00bfa5] text-white rounded-md font-medium hover:-translate-y-1 transition-transform duration-300">
                Explore All Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
