import React from "react";
import {Card,CardTitle} from "reactstrap";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths }, country }) => {
  if (!confirmed) {
    return "Loading.. please wait";
  }

  return (
    <div className={styles.container}>
      <br />
      <h2>{country ? `Negara: ${country}` : `Global`}</h2>
      <Card body className="text-center">
        <CardTitle><h5>Positif</h5></CardTitle>
        <h5>{confirmed.value}</h5>
      </Card>
      <Card body className="text-center">
        <CardTitle><h5>Sembuh</h5></CardTitle>
        <h5>{recovered.value}</h5>
      </Card>
      <Card body className="text-center">
        <CardTitle><h5>Meninggal</h5></CardTitle>
        <h5>{deaths.value}</h5>
      </Card>
    </div>
  );
};

export default Cards;
