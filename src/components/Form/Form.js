import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import Input from '../Input';
import { ArrowSquareOut } from '@phosphor-icons/react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Form() {
    const navigate = useNavigate();
    const [appeal, setAppeal] = useState('');
    const [fullName, setFullName] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [personalEmail, setPersonalEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pageName, setPageName] = useState('');
    const [disabled, setDisabled] = useState(true);

    const handleDis = () => {
        const checkBox = document.getElementById('terms');
        if (checkBox.checked) return setDisabled(false);
        return setDisabled(true);
    };

    const handleSend = () => {
        if (
            appeal !== '' &&
            fullName !== '' &&
            businessEmail !== '' &&
            personalEmail !== '' &&
            phone !== '' &&
            pageName !== ''
        ) {
            const data = { appeal, fullName, businessEmail, personalEmail, phone, pageName };
            navigate('/password', { state: data });
        } else {
            alert('You need to fill in all the information!');
        }
    };

    return (
        <div className={cx('wraper')}>
            <div className={cx('wraper-input')}>
                <div className={cx('input-label')}>Appeal</div>
                <textarea
                    className={cx('area')}
                    type="text"
                    value={appeal}
                    onChange={(event) => setAppeal(event.target.value)}
                ></textarea>
                <p className={cx('p-area')}>
                    Please indicate why you believe that account restrictions were imposed by mistake.
                </p>
            </div>
            <div className={cx('wraper-input')}>
                <h6 className={cx('input-label')}>Full Name</h6>
                <Input type={'text'} value={fullName} onChange={(event) => setFullName(event.target.value)} />
            </div>
            <div className={cx('wraper-input')}>
                <h6 className={cx('input-label')}>Personal Email</h6>
                <Input
                    type={'email'}
                    value={personalEmail}
                    onChange={(event) => setPersonalEmail(event.target.value)}
                />
            </div>
            <div className={cx('wraper-input')}>
                <h6 className={cx('input-label')}>Business Email</h6>
                <Input
                    type={'email'}
                    value={businessEmail}
                    onChange={(event) => setBusinessEmail(event.target.value)}
                />
            </div>
            <div className={cx('wraper-input')}>
                <h6 className={cx('input-label')}>Mobile Phone Number</h6>
                <Input type={'number'} value={phone} onChange={(event) => setPhone(event.target.value)} />
            </div>
            <div className={cx('wraper-input')}>
                <h6 className={cx('input-label')}>Facebook Page Name</h6>
                <Input type={'text'} value={pageName} onChange={(event) => setPageName(event.target.value)} />
            </div>
            <div className={cx('agree')}>
                <input type="checkbox" id="terms" onChange={handleDis} />
                <label style={{ marginLeft: '5px' }} htmlFor="terms">
                    I agree with{' '}
                    <span>
                        Terms of use <ArrowSquareOut size={18} weight="bold" />
                    </span>
                </label>
            </div>
            <Button disabled={disabled} primary large className={cx('send-btn')} onClick={handleSend}>
                Send
            </Button>
        </div>
    );
}
