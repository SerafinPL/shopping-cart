import React from "react";

import Button from "../Button/Button";
import styles from "./List.module.scss";
import fotoHeadset from "../../images/headphones.png";
import fotoX from "../../images/x-img.png";
import fotoPencil from "../../images/edit-img.png";

const List = (props) => {
  console.log(props.products);
  return (
    <div className={styles.mainBox}>
      <section className={styles.List}>
        <header>
          <div className={styles.X}></div>
          <div className={styles.grow}></div>
          <p>Product Name</p>
          <p>Unit Price</p>
          <p>Qty</p>
        </header>
        <main>
          <img className={styles.X} src={fotoX} alt="X" />
          <div className={styles.Headset}>
            <img src={`/images/${props.products.image}`} alt="Headset" />
          </div>
          <p>name</p>
          <p>price</p>
          <div className={styles.Qty}>change</div>
        </main>
      </section>
      <footer>
        <Button>Update Shopping Cart</Button>
      </footer>
    </div>
  );
};

export default List;
