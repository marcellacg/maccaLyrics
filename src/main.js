import React from "react";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import { Container } from 'react-materialize';

const Main = () => (
  <main>
    <Container>
      <Home />
    </Container>
    <Footer />
  </main>
);

export default Main;