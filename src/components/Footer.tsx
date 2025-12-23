const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Saichandu Sadam. All rights reserved.
        </div>
        <nav className="flex gap-6">
          <a
            href="#work"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
