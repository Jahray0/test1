import Title from '../../components/Title/Title';
import styles from './About.module.scss'


function About() {
  return (
    <div className={styles.main}>
      <Title text = {'A propos'}/>
    </div>
  );
}

export default About;
