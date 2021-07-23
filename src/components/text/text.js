import styles from './text.module.scss';

const Text = ({ value, fs }) => <p className={styles[fs]}>{value}</p>;

export default Text;
