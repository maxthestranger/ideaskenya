import styles from './button.module.scss';

const Button = ({ value, theme }) => (
  <button className={`${styles.ik__btn} ${styles[theme]}`}>{value}</button>
);

export default Button;
