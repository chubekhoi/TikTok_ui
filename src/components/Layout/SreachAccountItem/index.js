import classNames from 'classnames/bind';
import styles from './SearchAccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function SearchAccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://tse1.mm.bing.net/th?id=OIP.BN9HHWLDj3ZvRc5y44UMhAHaEK&pid=Api&P=0&h=220"
        alt="hoa"
      ></img>
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>nguyen van c</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('useName')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default SearchAccountItem;
