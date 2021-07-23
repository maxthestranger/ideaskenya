import styles from './title.module.scss';

const Title = ({ value, fs, style }) => (
  <h1 className={[style, styles.title]}>{value}</h1>
);

export default Title;
