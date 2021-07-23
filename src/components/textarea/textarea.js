import styles from './textarea.module.scss';

const TextArea = () => (
  <textarea className={styles.textarea} rows={2} maxLength={140} />
);

export default TextArea;
