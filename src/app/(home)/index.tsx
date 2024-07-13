import React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Feature from '../../components/Feature';
import Divider from '../../components/Divider';
// import SellFiles from '../../components/SellFiles';
// import SecurePayment from '../../components/SecurePayment';

import PrivateSessionsIcon from '@/assets/private-sessions.svg';
import GroupStreamsIcon from '@/assets/group-streams.svg';
import SecurePaymentIcon from '@/assets/secure-payment.svg';
import SellFilesIcon from '@/assets/sell-files.svg';

const HomePage: React.FC = () => (
  <Layout>
    <Hero />
    <Feature
      title="Private sessions"
      description="Private and secure video sessions allow to share knowledge and get new skills with other people face to face."
      imageSrc={PrivateSessionsIcon}
      imageAlt="Private sessions"
    />
    <Divider />
    <Feature
      title="Group streams"
      description="Organise people in groups and educate them in your field. Learn languages, how to dance, draw, create new experiences."
      imageSrc={GroupStreamsIcon}
      imageAlt="Group streams"
      // @ts-ignore
      isReversed
    />
    <Divider />
    <Feature
      title="Sell files"
      description="Record your fitness programs, construction layouts or family recipes and sell them in selected formats."
      imageSrc={SellFilesIcon}
      imageAlt="Sell files"
    />
    <Divider />
    <Feature
      title="Secure Payment"
      description="Your money is safe. Our system ensures that everybody gets qualified content and paid for it."
      imageSrc={SecurePaymentIcon}
      imageAlt="Secure payment"
      // @ts-ignore
      isReversed
    />
  </Layout>
);

export default HomePage;
