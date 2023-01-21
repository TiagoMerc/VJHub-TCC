import React from "react";
import Header from "./Header";
import Ecossistema from "./Ecossistema";
import Oquee from "./Oquee";
import ComoFunciona from "./ComoFunciona";
import EntendaMelhor from "./EntendaMelhor";
import { Footer } from "../../components";

function Home() {
  return (
    <>
      <Header />
      <Ecossistema />
      <Oquee />
      <ComoFunciona />
      <EntendaMelhor />
      <Footer />
    </>
  );
}

export default Home;
