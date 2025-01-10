export default function ContactPage() {
  return (
    <div className="container mx-auto text-center py-20 relative z-10">
      <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
      <p className="text-lg mb-8 text-foreground max-w-xl mx-auto">
        Have questions or want to get in touch? Fill out the form below and
        we’ll get back to you as soon as possible.
      </p>
      <form className="bg-secondary text-left p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <label className="block mb-4">
          <span className="text-foreground">Your Name</span>
          <input
            type="text"
            placeholder="John Doe"
            className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-800 text-foreground border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>
        <label className="block mb-4">
          <span className="text-foreground">Your Email</span>
          <input
            type="email"
            placeholder="example@example.com"
            className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-800 text-foreground border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-highlight text-white font-bold py-2 px-4 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
