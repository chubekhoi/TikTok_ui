import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Warpper as PoperWarpper } from '../index';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultFn = function name(params) {};
function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistotry] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = function () {
    return current.data.map(function (item, index) {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={function () {
            if (isParent) {
              setHistotry(function (pre) {
                return [...pre, item.children];
              });
            } else {
              onChange(item);
            }
          }}
        ></MenuItem>
      );
    });
  };
  return (
    <>
      <Tippy
        interactive
        visible
        placement="bottom-end"
        delay={[0, 700]}
        render={(attrs) => {
          return (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
              <PoperWarpper className={cx('menu-popper')}>
                {history.length > 1 && (
                  <Header
                    title="Language"
                    onBack={function (param) {
                      setHistotry(function (pre) {
                        return pre.slice(0, pre.length - 1);
                      });
                    }}
                  ></Header>
                )}
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
