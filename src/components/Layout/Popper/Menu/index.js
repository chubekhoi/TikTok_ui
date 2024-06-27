import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Warpper as PoperWarpper } from '../index';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
  const renderItems = function () {
    return items.map(function (item, index) {
      return <MenuItem key={index} data={item}></MenuItem>;
    });
  };
  return (
    <>
      <Tippy
        interactive
        placement="bottom-end"
        delay={[0, 700]}
        render={(attrs) => {
          return (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
              <PoperWarpper className={cx('menu-popper')}>
                {renderItems()}
              </PoperWarpper>
            </div>
          );
        }}
      >
        {children}
      </Tippy>
    </>
  );
}

export default Menu;
