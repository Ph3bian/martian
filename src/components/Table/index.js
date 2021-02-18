import React from "react";
import styles from "./table.module.scss";
const Table = ({ data = [], headers = [], handleClick }) => {
  const handleRowClick = (item) => {
    return handleClick && handleClick(item);
  };
  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          {headers.map(({ name, title }) => (
            <th key={name}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr onClick={()=>handleRowClick(item)}>
            {headers.map((header) => (
              <td>
                {header.formatter ? header.formatter(item) : item[header.name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
