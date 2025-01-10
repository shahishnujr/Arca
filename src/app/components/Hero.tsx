export const Hero = () => {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-6 text-primary">
        Donate Blood, Save Lives
      </h1>
      <p className="text-lg max-w-2xl mb-8 text-foreground">
        Your small act of kindness can save lives. Join our mission today and
        make a difference in someone's life.
      </p>
      <button className="bg-primary hover:bg-highlight px-8 py-3 rounded-md shadow-lg transition-transform transform hover:scale-105">
        Become a Donor
      </button>
      {/* Floating Circles */}
      <div
        className="absolute top-10 left-10 w-24 h-24 rounded-full bg-highlight opacity-30 animate-pulse"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-primary opacity-20 animate-pulse"
        style={{ animationDuration: "6s" }}
      ></div>
    </section>
  );
};