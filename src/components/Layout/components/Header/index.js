import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { Warpper as PoperWarpper } from '../../Popper/index';
import images from '~/asset/images';
import SearchAccountItem from '../../SreachAccountItem';
const cx = classNames.bind(styles);
function Header({ children }) {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <header className={cx('warpper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </div>

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => {
            return (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PoperWarpper>
                  <h4 className={cx('search-title')}>Account</h4>
                  <SearchAccountItem></SearchAccountItem>
                  <SearchAccountItem></SearchAccountItem>
                  <SearchAccountItem></SearchAccountItem>
                  <SearchAccountItem></SearchAccountItem>
                  <SearchAccountItem></SearchAccountItem>
                </PoperWarpper>
              </div>
            );
          }}
        >
          <div className={cx('search')}>
            <input
              placeholder="search accounts and videos"
              spellCheck={false}
            />
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
        </Tippy>
        <div className={cx('acction')}>
          <Button
            text
            rightIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
          >
            upload
          </Button>
          <Button primary>Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
