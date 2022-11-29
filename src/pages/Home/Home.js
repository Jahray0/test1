import Title from "../../components/Title/Title";
import styles from "./Home.module.scss";
import img from "../../assets/img.png";
import Banner from "../../components/Banner/Banner";

//import { useState } from "react";
//import CardFruit from "../../components/CardFruit/CardFruit";

function Home() {
  return (
    <div className={styles.main}>
      <Banner />
      <Title text={`Page d'accueil`} />

      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
  );
}

export default Home;
