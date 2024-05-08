import styles from './logo.module.css';
import LogoImage from '@lambo/assets/logo.svg';
import Image from 'next/image'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src={LogoImage}
        // width={500}
        // height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
