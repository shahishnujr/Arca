"use client";

export default function ContactPage() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">
        Contact Us
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <label className="block mb-4">
          <span className="text-white">Your Name</span>
          <input
            type="text"
            className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-md"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-white">Your Email</span>
          <input
            type="email"
            className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-md"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-white">Message</span>
          <textarea
            className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-md"
            rows={4}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
