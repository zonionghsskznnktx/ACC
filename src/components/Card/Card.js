import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import { CaretRight } from '@phosphor-icons/react';

const cx = classNames.bind(styles);

export default function Card({ data, onClick }) {
    return (
        <div className={cx('wraper')}>
            {data.map((item, index) => (
                <button className={cx('content')} key={index} onClick={onClick}>
                    <div className={cx('left')}>{item.img && <img src={item.img} alt="" width={50} />}</div>
                    <div className={cx('center')}>
                        {item.question && <p>{item.question}</p>}
                        <p className={cx('group')}>{item.group}</p>
                    </div>
                    <div className={cx('right')}>
                        <CaretRight size={32} weight="bold" />
                    </div>
                </button>
            ))}
        </div>
    );
}
