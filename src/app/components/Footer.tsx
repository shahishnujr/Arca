export const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground py-6 text-center">
      <p className="text-sm">
        © 2025 Blood Donation. All Rights Reserved.
      </p>
      <p className="text-sm">
        Contact us:{" "}
        <a
          href="mailto:support@blooddonation.org"
          className="text-primary hover:underline"
        >
          support@blooddonation.org
        </a>
      </p>
    </footer>
  );
};
