import styles from "./Banner.module.scss";
import img from '../../assets/img.png'

function Banner() {
  return (
    <div className={styles.main}>
        <div className={styles.logo}>
          <img
            src={img}
            alt="coucou"
          />
    </div>
    </div>
  );
}

export default Banner;