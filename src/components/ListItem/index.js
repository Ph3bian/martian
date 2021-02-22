import React from "react";
import { ChevronRightIcon } from "assets/svg";
import {currencyFormatter} from "utils/helper"
import styles from "./listItem.module.scss";
const ListItem = ({ handleClick, data }) => {
  return (
    <div className={styles.List}>
      {data &&
        data.map((item, id) => (
          <div
            className={styles.ListItem}
            onClick={() => handleClick(item)}
            key={`${item.name}_${item.budget_spent - id}`}
          >
            <div className={styles.ListItemDescription}>
              <h2>{item.name}</h2>
              <p>Budget: <strong>{currencyFormatter(item.budget)}</strong></p>
              <p>Budget Spent: <strong>{currencyFormatter(item.budget_spent)}</strong></p>
              <p>Budget Left: <strong>{ currencyFormatter(item.budget - item.budget_spent)}</strong></p>
            </div>
            <div className={styles.ListItemArrow}>
              <ChevronRightIcon />
            </div>
          </div>
        ))}
    </div>
  );
};
export default ListItem;
