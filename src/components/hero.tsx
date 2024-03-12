const Hero = () => {
  return (
    <>
      <div id="hero" className="hero">
        <div className="hero__box">
          <h1 className="hero__text">
            Hello my name is
            <span className="hero__text hero__text--highlight">
              Mario Kramarić.
            </span>
            I design and develop websites, this is my portfolio.
          </h1>
        </div>
        <div>
          <img
            className="hero__photo"
            src="src/assets/jpg/profile.jpg"
            alt="photo of author"
          />
        </div>
        <div className="hero__box">
          <h1 className="hero__text">
            Since I love to take photos in my spare time, you can scroll down to
            see my gallery and you can also contact me 🔥
          </h1>
        </div>
      </div>
    </>
  );
};
export default Hero;
