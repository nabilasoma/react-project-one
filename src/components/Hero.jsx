const Hero = () => {
  return (
    <main className="hero">
      <div>
        <h1>Your Feet Deserve The Best</h1>
        <p>
          A pair of stylish Bata casual loafers for comfort & fashion. The black
          casual loafer is suitable for any man in any profession
        </p>
        <div className="heroButton">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="shopify">
          <p>Also Available On </p>
          <div className="brand-icon">
            <img src="/public/amazon.png" alt="" />
            <img src="/public/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="heroImage">
        <img src="/public/pair-trainers.png" alt="" />
      </div>
    </main>
  );
};

export default Hero;
