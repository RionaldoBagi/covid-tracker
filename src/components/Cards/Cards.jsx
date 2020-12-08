import React from "react";
import {Card,CardTitle} from "reactstrap";
import styles from "./Cards.module.css";
import NumberFormat from "react-number-format";

const Cards = ({ data: { confirmed, recovered, deaths }, country }) => {
  if (!confirmed) {
    return "Loading.. please wait";
  }

  return (
    <div className={styles.container}>
      <br />
      <h2>{country ? `Negara: ${country}` : `Global`}</h2>
      <Card body className="text-center"
      style= {{borderRadius: 20, backgroundColor: "Grey"}}>
        <CardTitle><h5>Positif</h5></CardTitle>
        <h5>
        <NumberFormat
          value={confirmed.value}
          thousandSeparator={true}
          displayType={"text"}/>
          </h5>
      </Card>
      <Card body className="text-center"
      style= {{borderRadius: 20, backgroundColor: "Green"}}>
        <CardTitle><h5>Sembuh</h5></CardTitle>
        <h5><NumberFormat
          value={confirmed.value}
          thousandSeparator={true}
          displayType={"text"}/></h5>
      </Card>
      <Card body className="text-center"
      style= {{borderRadius: 20, backgroundColor: "Red"}}>
        <CardTitle><h5>Meninggal</h5></CardTitle>
        <h5><NumberFormat
          value={confirmed.value}
          thousandSeparator={true}
          displayType={"text"}/></h5>
      </Card>
    </div>
  );
};

export default Cards;
