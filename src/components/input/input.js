import styles from './input.module.scss';

const Input = ({ type, placeholder }) => (
  <input type={type} placeholder={placeholder} className={styles.input} />
);

export default Input;
