import React from "react";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Articles />
      <Footer />
    </main>
  );
};

export default Home;
