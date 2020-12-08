import React from "react";
import {Card} from "reactstrap";
import styles from "./Cards.module.css";
import NumberFormat from "react-number-format";

const Cards = ({ data: { confirmed, deaths, recovered }, text }) => {
  if (!confirmed) {
    return "";
  }
  return (
    <div>
      <h2>{text}</h2>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.positif}>
            <Card
            body
            className="text-center"
            inverse
            style={{ borderRadius: 25, backgroundColor: "Grey" }}
          >
            <h3>Positif</h3>
            <p>
              <NumberFormat
                value={confirmed.value ? confirmed.value : confirmed}
                thousandSeparator={true}
                displayType={"text"}
              />
            </p>
            </Card>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.meninggal}>
          <Card
            body
            className="text-center"
            inverse
            style={{ borderRadius: 25, backgroundColor: "Red" }}
          >
            <h3>Meninggal</h3>
            <p>
              <NumberFormat
                value={deaths.value ? deaths.value : deaths}
                thousandSeparator={true}
                displayType={"text"}
              />
            </p>
            </Card>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.sembuh}>
          <Card
            body
            className="text-center"
            inverse
            style={{ borderRadius: 25, backgroundColor: "Lime" }}
          >
            <h3>Sembuh</h3>
            <p>
              <NumberFormat
                value={recovered.value ? recovered.value : recovered}
                thousandSeparator={true}
                displayType={"text"}
              />
            </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;