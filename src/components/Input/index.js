import React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

export default function Input({
    value,
    onChange,
    onClickIconRight,
    placeholder,
    type,
    inputMode,
    iconLeft,
    iconRight,
    classNameWarper,
}) {
    return (
        <div className={cx('wraper', classNameWarper)}>
            {iconLeft && <span className={cx('icon', 'iconLeft')}>{iconLeft}</span>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                inputMode={inputMode}
                className={cx('input')}
            />
            {iconRight && (
                <span className={cx('icon', 'iconRight')} onClick={onClickIconRight}>
                    {iconRight}
                </span>
            )}
        </div>
    );
}
