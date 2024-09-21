import React from 'react';
import classNames from 'classnames/bind';
import styles from './Policy.module.scss';
import images from '../../assets/images';
import Card from '../Card';
import { ArrowSquareOut, CaretRight } from '@phosphor-icons/react';

const cx = classNames.bind(styles);

export default function Policy() {
    const data1 = [
        {
            img: images.star,
            group: 'The main thing in the section',
        },
    ];
    const data2 = [
        {
            group: 'What products are covered by this policy?',
        },
        {
            group: 'Learn more about managing your privacy at Privacy Center',
        },
    ];
    const data3 = [
        {
            group: 'Your actions and information you provide to us',
        },
        {
            group: 'Friends, subscribers and other contacts',
        },
        {
            group: 'Application, browser and device information',
        },
        {
            group: 'Information from Partners, suppliers and other third parties',
        },
    ];
    const data4 = [
        {
            img: images.dir,
            question: 'Manage the information we collect about you',
            group: 'Privacy Center',
        },
    ];

    return (
        <div className={cx('wraper')}>
            <h3 className={cx('topic')}>What is the Privacy Policy and what does it cover?</h3>
            <Card data={data1} />
            <p>
                At Meta, we want you to understand what information we collect, how we use it, and with whom we use it.
                let's share. Therefore, we recommend that you read our Privacy Policy. This will help you use
                <span>
                    {' '}
                    Meta <ArrowSquareOut size={18} weight="bold" />
                </span>
                's products the way you need.
            </p>
            <p>
                In the Privacy Policy, we explain how we collect, use, store information, and We also share it. We also
                tell you about your rights. Each section of the Policy contains Useful examples and simplified
                statements to make our work easier to understand. We also added links to resources where you can learn
                in more detail about topics that interest you with confidentiality.
            </p>
            <p>
                It is important to us that you know how to manage your privacy (confidentiality), so we also We show you
                where in the settings of the Meta Products you use you can manage your data. You you can
                <span>
                    {' '}
                    update these settings <ArrowSquareOut size={18} weight="bold" />{' '}
                </span>
                to personalize your user experience.
            </p>
            <p>Полный текст политики приведен ниже.</p>
            <Card data={data2} />
            <h3 className={cx('topic')}>What information do we collect?</h3>
            <p>
                The information we collect and process about you depends on how you use our <span>Products</span>. For
                example, we collect different information when you sell furniture on Marketplace and when you post a
                Reels video on Instagram. We collect data about you when you use our Products,
                <span>
                    even if you do not have an account <ArrowSquareOut size={18} weight="bold" />
                </span>
                .
            </p>
            <p>The following are the types of data we collect:</p>
            <Card data={data3} />
            <h3 className={cx('topic')}>
                What happens if you do not allow us to collect certain types of information?
            </h3>
            <p>
                Some information is necessary for the operation of our Products. Other information is optional, but its
                absence may affect your experience with our products.
            </p>

            <p className={cx('more')}>
                More details
                <CaretRight size={15} weight="bold" style={{ marginBottom: '-2px' }} />
            </p>

            <h3 className={cx('topic')}>
                What if the information we collect does not personally identify individuals?
            </h3>
            <p>
                In some cases, before third parties make information available to us, they de-identify, aggregate, or
                anonymize it so that it cannot be used to identify individual individuals. We use this information as
                described below, without attempting to re-identify individuals.
            </p>
            <h3 className={cx('topic')}>Data control</h3>
            <Card data={data4} />
        </div>
    );
}
