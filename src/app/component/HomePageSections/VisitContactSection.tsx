"use client";

export default function VisitUs() {
  return (
    <section className="relative bg-gradient-to-b from-[#ecfdf5] to-white pt-16 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top curve transition */}
      <div className="absolute top-0 left-0 w-full -translate-y-full z-0 pointer-events-none">
        <svg
          className="w-full h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
            fill="#ecfdf5"
          />
        </svg>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-white/20 bg-white/40 backdrop-blur-md p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Map */}
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086393885042!2d-122.4010968240205!3d37.79239401266473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cf53c03d%3A0x9b68103820218710!2sGoogle%20San%20Francisco!5e0!3m2!1sen!2sus!4v1713330000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="min-h-[300px] w-full"
            ></iframe>
          </div>

          {/* Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h3>
            <p className="text-gray-700 text-base mb-2">
              123 Walnut Street, Denver, CO 80216
            </p>
            <p className="text-gray-700 text-base mb-2">
              Open Monday to Friday, 9 AM – 5 PM
            </p>
            <p className="text-gray-700 text-base mb-6">
              Contact us at{" "}
              <a
                href="mailto:hello@example.com"
                className="text-blue-600 underline"
              >
                hello@example.com
              </a>
            </p>
            <a
              href="#contact"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium shadow hover:bg-gray-800 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Transparent bottom fade into next section */}
      <div className="relative z-10 -mt-1 h-32 bg-gradient-to-b from-white/90 via-white/10 to-transparent" />
    </section>
  );
}
