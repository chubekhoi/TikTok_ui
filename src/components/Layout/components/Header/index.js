import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/asset/images';
const cx = classNames.bind(styles);
function Header({ children }) {
  return (
    <header className={cx('warpper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </div>

        <div className={cx('search')}>
          <input placeholder="search accounts and videos" spellCheck={false} />
          {/* <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button> */}
          <button className={cx('loading')}>
            <FontAwesomeIcon icon={faSpinner} />
          </button>

          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('acction')}></div>
      </div>
    </header>
  );
}

export default Header;
