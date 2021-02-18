import React, { Fragment } from "react";
import styles from "./listItem.module.scss";
const ListItem = ({ handleClick, data }) => {
  return (
    <Fragment>
      {data &&
        data.map((item) => (
          <div className={styles.ListItem}>
            <div className={styles.ListItemDescription}>
              <h2>{item.name}</h2>
              <p>{item.budget}</p>
              <span>{item.budget_spent}</span>
            </div>
            <div className={styles.ListItemArrow}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </div>
        ))}
    </Fragment>
  );
};
export default ListItem;
