import React from "react";
import PropTypes from "prop-types";
import styles from "./input.module.scss";

const Input = ({ label, error, ...rest }) => (
  <div className={styles.Input}>
    <label>{label}</label>
    <div className={styles.InputField}>
      <input {...rest} className={error && "error"} />
      {error && (
        <div>
          <span className={styles.InputError}> {error}</span>
        </div>
      )}
    </div>
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  rest: PropTypes.shape({}),
};

Input.defaultProps = {
  error: "",
  rest: null,
};
export default Input;
