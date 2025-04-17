"use client";

export default function VisitUs() {
  return (
    <div className="rounded-3xl overflow-hidden shadow-md border border-black/5 backdrop-blur-md bg-white/60 p-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086393885042!2d-122.4010968240205!3d37.79239401266473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cf53c03d%3A0x9b68103820218710!2sGoogle%20San%20Francisco!5e0!3m2!1sen!2sus!4v1713330000000!5m2!1sen!2sus"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="rounded-xl w-full"
      ></iframe>

      <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
        <p className="text-gray-700 text-sm">
          Our office is open Monday to Friday from 9 AM to 5 PM.
        </p>
      </div>
    </div>
  );
}
