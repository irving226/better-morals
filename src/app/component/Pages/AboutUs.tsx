<section className="relative overflow-hidden py-24 px-6 bg-white">
  {/* Floating blur effect */}
  <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-teal-200/20 to-blue-300/30 rounded-full blur-3xl z-0" />
  <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-tr from-purple-200/20 to-pink-300/30 rounded-full blur-3xl z-0" />

  <div className="relative z-10 max-w-5xl mx-auto text-center">
    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">
      Discover <span className="text-teal-500">Better Morals</span> Marketing
    </h1>
    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
      Ethical AI-powered campaigns that drive impact—without compromising your
      values.
    </p>
  </div>

  {/* Animated features */}
  <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
    {[
      {
        title: "Our History",
        desc: "We built a legacy on ethical impact, partnering with brands to lead with responsibility.",
        icon: "↩️",
      },
      {
        title: "Our Mission",
        desc: "We design marketing systems that prioritize sustainability and long-term client value.",
        icon: "🎯",
      },
      {
        title: "Meet the Team",
        desc: "Led by experts in AI and marketing who walk the walk—not just talk it.",
        icon: "🧠",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
      >
        <div className="text-4xl mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</section>;
