import React from 'react';
import classNames from 'classnames/bind';
import styles from './Return.module.scss';
import images from '../../assets/images';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

export default function Return() {
    return (
        <div className={cx('wraper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>Request has been sent</h1>
                <div className={cx('logo')}>
                    <img src={images.phone} alt="Logo" />
                </div>
                <div className={cx('content')}></div>
                <div className={cx('meta')}>
                    <div className={cx('btn-wraper')}>
                        <Button large primary className={cx('btn')} href={'https://www.facebook.com/'}>
                            Continue
                        </Button>
                    </div>
                    <img src={images.meta_logo_grey} width={80} alt="meta" />
                </div>
            </div>
        </div>
    );
}
