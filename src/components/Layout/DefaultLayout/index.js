import Header from '~/components/layout/components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx('warpper-default')}>
      <Header></Header>
      
      <div className={cx('container')}>
        <Sidebar></Sidebar>

        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
