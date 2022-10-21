import React from 'react'
import FAQS from '../../components/FAQS';
import Footer from '../../components/Footer';
import MainHeader from '../../components/MainHeader';
import Programs from '../../components/Programs';
import Testimonials from '../../components/Testimonials';
import Values from '../../components/Values';
import './Home.css';

export default function Home() {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQS />
      <Testimonials />
      <Footer />
    </>
  )
}
