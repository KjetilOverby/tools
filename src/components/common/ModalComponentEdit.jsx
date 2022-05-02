import React from "react";
import styles from "../../../styles/common/ModalComponentEdit.module.css";

const ModalComponentEdit = ({
  title,
  cancel,
  icon,
  btnBorder,
  actionBtnTxt,
  description,
  actionHover,
  getSerial,
  actionBtn,
  commentInput,
  setGetCommentInput,
  error,
}) => {
  return (
    <>
      <div className={styles.mainContainer}>
        {error && <h1 className="error">{error}</h1>}
        <div className={styles.container}>
          <div className={styles.iconContainer}>{icon}</div>
          <div className={styles.modal}>
            <div className={styles.header}>
              <h1 className={styles.header}>
                {title} <span style={{ color: "orangered" }}>{getSerial}</span>?
              </h1>
              {commentInput && (
                <input
                  type="text"
                  placeholder="Skriv kommentar"
                  onChange={(e) => setGetCommentInput(e.target.value)}
                />
              )}
            </div>
            <p className={styles.description}>{description}</p>

            <button className="btn1" onClick={actionBtn}>
              {actionBtnTxt}
            </button>
            <button className="btn2" onClick={() => cancel(false)}>
              Avbryt
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .btn1 {
          background: transparent;
          border: 1px solid ${btnBorder};
          border-radius: 10px;
          padding: 0.4rem 0;
          color: ${btnBorder};
          transition: 0.5s;
          grid-row: 9/10;
          grid-column: 7/10;
          width: 5rem;
        }
        .btn1:hover {
          background: ${actionHover};
          cursor: pointer;
        }
        .btn2 {
          background: transparent;
          border: 1px solid black;
          border-radius: 10px;
          padding: 0.4rem 0;
          color: black;
          transition: 0.5s;
          grid-row: 9/10;
          grid-column: 4/6;
          width: 5rem;
          margin-left: -2rem;
        }
        .btn2:hover {
          background: #dadada;
          cursor: pointer;
        }
        .error {
          color: red;
          position: absolute;
          top: 15rem;
        }
      `}</style>
    </>
  );
};

export default ModalComponentEdit;
