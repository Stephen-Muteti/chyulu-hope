import Navigation from "./Navigation";
import Banner from "./Banner";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Banner />
      <Navigation />
    </div>
  );
};


export default TopBar;