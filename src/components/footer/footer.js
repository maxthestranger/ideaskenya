// next
import Image from 'next/image';
import Button from '../button/button';

// styles
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <a href="/home">
            <Image
              src="/brands/logo.svg"
              alt="Ideas Kenya Logo"
              width={154}
              height={30}
            />
          </a>
        </div>
        <div className="col-md-6">
          <Button value="Startup Application" theme="ik__btn__primary" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
