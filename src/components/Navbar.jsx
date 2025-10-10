const Navbar = () => {
  return (
    <nav className="bg-white/30 backdrop-blur-md text-black py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">Nethmi Pramoddya</h1>
        <div className="flex gap-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:opacity-80 transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
