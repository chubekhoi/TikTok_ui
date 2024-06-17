import classNames from 'classnames/bind';
import styles from './Sidebar.moduel.scss';
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('warpper')}>
      <h2>sidebar</h2>
    </aside>
  );
}

export default Sidebar;
