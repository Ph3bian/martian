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
          {headers.map(({ name, title }, id) => (
            <th key={`${name}-${id}`}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, id) => (
          <tr onClick={() => handleRowClick(item)} key={id}>
            {headers.map((header, id) => (
              <td key={`${header.name}-${id}`}>
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
