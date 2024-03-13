import Grid from "./components/grid";
import Header from "./components/header";
import Hero from "./components/hero";
import data from "./data/data";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <h1 className="title">Gallery</h1>
      <Grid photos={data} />
    </>
  );
};

export default App;
