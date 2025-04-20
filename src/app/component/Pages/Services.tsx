<section className="relative py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-gray-100 overflow-hidden">
  <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-cyan-300/30 blur-3xl rounded-full -z-10" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-purple-300/30 blur-3xl rounded-full -z-10" />

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: "Sustainable Marketing",
        desc: "Eco-conscious campaigns for modern brands. Build your impact without the waste.",
        icon: "🌱",
      },
      {
        title: "AI-Driven Insights",
        desc: "Real-time data powerups, minus the jargon. Your dashboard just got smarter.",
        icon: "📊",
      },
      {
        title: "Personalized Journeys",
        desc: "Every click, tracked with care. Create loyal fans, not just customers.",
        icon: "🧭",
      },
      {
        title: "Live Performance Tuning",
        desc: "AI monitors, you chill. Get auto-optimized campaigns with zero fluff.",
        icon: "⚙️",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-2xl p-6 shadow-lg transition-transform hover:scale-105 text-center"
      >
        <div className="text-5xl mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>;
