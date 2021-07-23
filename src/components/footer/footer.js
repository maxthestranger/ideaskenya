// next
import Image from 'next/image';

// styles
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={`footer mt-auto w-full py-4 ${styles.footer}`}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <ul className={styles.ik__footer_list}>
            <li>
              <a href="/help">Help</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/legal">Legal</a>
            </li>
          </ul>
        </div>
        <div className="col-md-12">
          <p className={styles.ik__copyright}>
            All rights reserved. @{new Date().getFullYear()}
          </p>
          <div className="w-full d-flex justify-content-center mt-3">
            <Image
              src="/images/brands/ideaskenya.svg"
              alt="Ideas Kenya Logo"
              width={130}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
