import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '../../assets/images';
import Button from '../../components/Button';
import {
    ArrowSquareOut,
    CaretDown,
    CaretUp,
    GearSix,
    House,
    List,
    LockKey,
    MagnifyingGlass,
    WarningCircle,
} from '@phosphor-icons/react';
import Card from '../../components/Card';
import ModalCustom from '../../components/Modal/Modal';
import Form from '../../components/Form';
import Policy from '../../components/Policy';

const cx = classNames.bind(styles);

export default function Home() {
    const privacyCenters = [
        {
            img: images.save_img,
            question: 'What is the Privacy Policy and what does it say?',
            group: 'Privacy Policy',
        },
        {
            img: images.save_img,
            question: 'How you can manage or delete your information',
            group: 'Privacy Policy',
        },
    ];
    const moreDetails = [
        {
            img: images.doc,
            question: 'What is the Privacy Policy and what does it say?',
            group: 'User Agreement',
        },
    ];
    const additional = [
        {
            question: 'How Meta uses information for generative AI models',
            group: 'Privacy Center',
        },
        {
            question: 'Cards with information about the operation of AI systems',
            group: 'Meta AI website',
        },
        {
            question: 'Introduction to Generative AI',
            group: 'For teenagers',
        },
    ];
    const settingPolicy = [
        { question: 'What is the Privacy Policy and what does it cover?' },
        { question: 'What information do we collect?' },
        { question: 'How you can manage or delete your information?' },
        { question: 'How do we share your information on Meta Products or with integrated partners?' },
        { question: 'How do we share information with third parties?' },
        { question: 'How is the cooperation between Meta Companies organized?' },
        { question: 'How can you manage or delete your information and exercise your rights?' },
        { question: 'How long do we keep your information?' },
        { question: 'How do we transmit information?' },
        { question: 'How do we respond to official requests, comply with applicable laws, and prevent harm?' },
        { question: 'How will you know when the policy changes?' },
        { question: 'How to ask Meta questions?' },
        { question: 'Why and how we process your data?' },
    ];
    const settingOther = [
        { question: 'Cookie Policy' },
        {
            question: 'Information for those who do not use Meta Products',
            icon: <ArrowSquareOut size={18} weight="bold" />,
        },
        { question: 'How Meta uses information for generative AI models' },
        { question: 'Data Transfer Framework Policy' },
        {
            question: 'Other terms and conditions',
            icon: <ArrowSquareOut size={18} weight="bold" />,
        },
    ];
    const setting = [
        {
            question: 'Facebook Settings',
            icon: <ArrowSquareOut size={18} weight="bold" />,
        },
        {
            question: 'Instagram Settings',
            icon: <ArrowSquareOut size={18} weight="bold" />,
        },
    ];
    const [showSettingPolicy, setShowSettingPolicy] = useState(false);
    const [showSettingOther, setShowSettingOther] = useState(false);
    const [showSetting, setShowSetting] = useState(false);
    const [showSettingMobile, setShowSettingMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenPolicy, setIsOpenPolicy] = useState(false);

    const openSettingPolicy = () => {
        setShowSettingPolicy(!showSettingPolicy);
    };

    const openSettingOther = () => {
        setShowSettingOther(!showSettingOther);
    };

    const openSetting = () => {
        setShowSetting(!showSetting);
    };
    const openSettingMobile = () => {
        setShowSettingMobile(!showSettingMobile);
    };

    const openModal = () => {
        setIsOpen(true);
        setShowSettingMobile(false);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    const openModalPolicy = () => {
        setIsOpenPolicy(true);
    };
    const closeModalPolicy = () => {
        setIsOpenPolicy(false);
    };

    const ButtonList = () => (
        <div className={cx('button-list')}>
            <Button outline large active>
                <House size={25} weight="bold" /> Privacy Center Home Page
            </Button>
            <Button outline large>
                <MagnifyingGlass size={25} weight="bold" /> Search
            </Button>
            <Button
                rightIcon={
                    showSettingPolicy ? <CaretUp size={25} weight="bold" /> : <CaretDown size={25} weight="bold" />
                }
                outline
                large
                onClick={openSettingPolicy}
            >
                <LockKey size={25} weight="bold" /> Privacy Policy
            </Button>
            {showSettingPolicy &&
                settingPolicy.map((item, index) => (
                    <Button className={cx('settingItemBtn')} outline large key={index} onClick={openModal}>
                        {item.question}
                    </Button>
                ))}
            <Button
                rightIcon={
                    showSettingOther ? <CaretUp size={25} weight="bold" /> : <CaretDown size={25} weight="bold" />
                }
                outline
                large
                onClick={openSettingOther}
            >
                <WarningCircle size={25} weight="bold" /> Other rules and articles
            </Button>
            {showSettingOther &&
                settingOther.map((item, index) => (
                    <Button
                        className={cx('settingItemBtn')}
                        outline
                        large
                        key={index}
                        rightIcon={item.icon}
                        onClick={openModal}
                    >
                        {item.question}
                    </Button>
                ))}
            <Button
                rightIcon={showSetting ? <CaretUp size={25} weight="bold" /> : <CaretDown size={25} weight="bold" />}
                outline
                large
                onClick={openSetting}
            >
                <GearSix size={25} weight="bold" /> Settings
            </Button>
            {showSetting &&
                setting.map((item, index) => (
                    <Button className={cx('settingItemBtn')} outline large key={index} onClick={openModal}>
                        {item.question}
                    </Button>
                ))}
        </div>
    );

    return (
        <div className={cx('wraper')}>
            <div className={cx('menu-mobile')}>
                <div className={cx('logo')}>
                    <img src={images.meta} alt="logo-meta" width={70} />
                </div>
                <Button className={cx('mobile-btn')} onClick={openSettingMobile}>
                    <List size={25} weight="bold" />
                </Button>
            </div>
            <div className={cx('container')}>
                <ModalCustom title={'Appeal Form'} logo modalIsOpen={isOpen} closeModal={closeModal}>
                    <Form />
                </ModalCustom>
                <ModalCustom title={'Privacy Policy'} modalIsOpen={isOpenPolicy} closeModal={closeModalPolicy}>
                    <Policy />
                </ModalCustom>
                <ModalCustom modalIsOpen={showSettingMobile} closeModal={openSettingMobile}>
                    <div className={cx('logo')}>
                        <img src={images.meta} alt="logo-meta" width={70} />
                    </div>
                    <h2>Privacy Center</h2>
                    <br />
                    <ButtonList />
                </ModalCustom>

                <div className={cx('menu-bar')}>
                    <div className={cx('logo')}>
                        <img src={images.meta} alt="logo-meta" width={70} />
                    </div>
                    <h2>Privacy Center</h2>
                    <ButtonList />
                </div>
                <div className={cx('content')}>
                    <div className={cx('suspend')}>
                        <div>
                            <img src={images.lock2} alt="logo-meta" width={40} />
                        </div>
                        <h2>We have suspend your page</h2>
                    </div>
                    <p>
                        We have received several reports that your account violates our terms of service and community
                        guidelines. As a result, your account will be sent for verification.
                    </p>
                    <p>
                        If you believe restrictions have been placed on your account in error, you can request a review.
                    </p>
                    <p className={cx('ticket')}>
                        Your ticket id: <span>4964-ATFD-48XD</span>
                    </p>
                    <div className={cx('appeal')}>
                        <h3>Appeal Guide</h3>
                        <ul>
                            <li>
                                Fact checkers may not respond to requests that contain intimidation, hate speech, or
                                other verbal threats.
                            </li>
                            <li>
                                In your appeal, please include all necessary information to allow the fact checker to
                                process your request in a timely manner. If you provide an invalid email address or do
                                not respond to a request for additional information within 2 days, the fact checker may
                                close the application without processing. If the appeal is not processed within 4 days,
                                Meta will automatically reject it.
                            </li>
                            <li>
                                When everything is ready, we will review your account and determine whether restrictions
                                apply to it. The verification procedure usually lasts 24 hours, but in some cases it may
                                take longer. Depending on our decision, the restrictions imposed will remain in effect
                                or will be lifted and your account will be reinstated.
                            </li>
                        </ul>
                        <div className={cx('card')}>
                            <img src={images.shild} alt="Lock" />
                            <div className={cx('card-content')}>
                                <p className={cx('card-type')}>Review request</p>
                                <h2>Fixing problems with account restrictions</h2>
                                <p>
                                    Please be sure to provide the requested information below. Failure to provide this
                                    information may delay the processing of your appeal.
                                </p>
                                <Button onClick={openModal} className={cx('request-btn')} primary large>
                                    Request Review
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('privacy-center')}>
                        <h4>Privacy Center</h4>
                        <Card data={privacyCenters} onClick={openModalPolicy} />
                    </div>
                    <div className={cx('more-detail')}>
                        <h4>For more details, see the User Agreement</h4>
                        <Card data={moreDetails} onClick={openModalPolicy} />
                    </div>
                    <div className={cx('additional')}>
                        <h4>Additional resources</h4>
                        <Card data={additional} onClick={openModalPolicy} />
                    </div>
                    <p className={cx('continually')}>
                        We continually identify potential privacy risks, including when collecting, using or sharing
                        personal information, and developing methods to reduce these risks. Read more about{' '}
                        <span>
                            Privacy Policy <ArrowSquareOut size={18} weight="bold" />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
