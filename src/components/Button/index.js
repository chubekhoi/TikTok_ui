import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  disabled = false,
  rounded = false,
  small = false,
  large = false,
  className,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProp
}) {
  let Component = 'button';
  const props = {
    onClick,
    ...passProp,
  };
  const classes = cx('wrapper', {
    primary,
    outline,
    text,
    disabled,
    rounded,
    small,
    large,
    [className]: className,
  });
  //remover event listenner when  button disabled
  if (disabled) {
    Object.keys(props).forEach(function (key) {
      if (key.startsWith('on') && typeof key === 'function') {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }
  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
