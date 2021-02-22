import React from "react";
import { ChevronRightIcon } from "assets/svg";
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
              <p>{item.budget}</p>
              <span>{item.budget_spent}</span>
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
