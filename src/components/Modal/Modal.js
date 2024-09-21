import React from 'react';
import Modal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { X } from '@phosphor-icons/react';
import images from '../../assets/images';

const cx = classNames.bind(styles);

export default function ModalCustom({ modalIsOpen, closeModal, title, logo, children }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '450px',
            maxHeight: '600px',
            backgroundColor: '#f0f2fb',
            borderRadius: '20px',
            padding: '10px 15px',
        },
    };
    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
            <div className={cx('top')}>
                <h2>{title}</h2>
                <div className={cx('close-icon')} onClick={closeModal}>
                    <X size={27} weight="bold" />
                </div>
            </div>
            {children}
            {logo && (
                <div className={cx('logo')}>
                    <img src={images.meta_logo_grey} alt="logo" width={77} />
                </div>
            )}
        </Modal>
    );
}
