import styles from "./Box.module.scss";

const Box = ({ type, pos, bgColor, bgImage, children }) => {
  return (
    <>
      {type === "slantBox" ? (
        <div
          className={styles.slantBox}
          style={{ bottom: pos, backgroundColor: bgColor }}
        ></div>
      ) : (
        <div
          className={styles.backgroundBox}
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className={styles.content}>{children}</div>
        </div>
      )}
    </>
  );
};

Box.defaultProps = {
    type: "backgroundBox",
    pos: null,
    bgColor: null,
    bgImage: null,
    children: null,
  };

export default Box;
