import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Blood Donation
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/donate" className="hover:text-primary">
            Donate
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
