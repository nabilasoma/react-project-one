const Navbar = () => {
  return (
    <div>
      <nav className="">
        <div className="logo">
          <img src="/public/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
