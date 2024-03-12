import Navbar from "./navbar";

const Header = () => {
  return (
    <>
      <div className="header">
        <img
          className="header__logo"
          src="src/assets/svg/favicon.svg"
          alt="website logo"
        />
        <Navbar />
      </div>
    </>
  );
};
export default Header;
