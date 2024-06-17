import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header({ children }) {
  return (
    <header className={cx('warpper-header')}>
      <div className={cx('inner')}></div>
    </header>
  );
}

export default Header;
