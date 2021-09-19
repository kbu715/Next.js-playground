import navStyles from '../styles/modules/Nav.module.scss';
import Link from 'next/link';
import { useContext } from 'react';
import ClickContext from '../context/click';
import { OutlinedButton, PrimaryButton } from './Button';
import { useDarkMode } from '../hooks/useDarkMode';
import { lightTheme } from '../my-theme';

const Nav = () => {
  const [clickAmount, increment] = useContext(ClickContext);

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ul>
        <li>
          <strong>{clickAmount}</strong> times
        </li>
        <li>
          <PrimaryButton onClick={increment} height={32}>
            Click Context Test
          </PrimaryButton>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
