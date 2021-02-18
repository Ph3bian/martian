import React, { useRef, useCallback, useEffect } from "react";
import styles from "./modal.module.scss";
import { CloseIcon } from "../../assets/svg";
import Button from "../Button";

const Modal = ({
  children,
  data,
  setShown,
  shown,
  hasFooter,
  hasHeader = true,
  handleSubmit,
  loading,
}) => {
  console.log(data, "modal")
  const node = useRef(null);

  const handleHide = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setShown(!shown);
        return;
      }
    },
    [setShown, shown]
  );
  const handleClick = useCallback(
    (event ) => {
      if (node.current && !node.current.contains( event.target)) {
        setShown(!shown);
        return;
      }
    },
    [setShown, shown]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleHide);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleHide);
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick, handleHide]);

  return (
    <div role="dialog" className={styles.Modal} data-show={shown}>
      <div className={styles.ModalContent}  ref={node}>
        {hasHeader && (
          <div className={styles.header}>
            <h3>{data.name}</h3>
            <CloseIcon
              role="button"
              onKeyDown={() => setShown(!shown)}
              onClick={() => setShown(!shown)}
            />
          </div>
        )}
        <div className={styles.body}>
          <div className={styles.bodyContent}>{children}</div>
        </div>
        {hasFooter && (
          <div className={styles.footer}>
            <Button
              type="button"
              variant="neutral"
              onKeyDown={() => setShown(!shown)}
              onClick={() => setShown(!shown)}
            >
              Close
            </Button>
            <Button
              type="button"
              data-dismiss="modal"
              variant="primary"
              onClick={handleSubmit}
              disabled={loading}
              name="submit"
            >
              {loading ? "loading..." : "Submit"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
