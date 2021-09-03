import Head from 'next/head'
import WithSubnavigation from '../components/Navbar'
import AboutCompany from '../components/sections/AboutCompany/AboutCompany'
import FeauturesPage from '../components/sections/Feauters/Feautures'
import HeroSection from '../components/sections/Hero/Hero'
import NewsLetterSection from '../components/sections/NewsLetter/NewsLetterSection'
import ServicesSection from '../components/sections/OurServices/ServicesSection'
import TestmonialsSection from '../components/sections/Testmonials/TestmonialsSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stackzenith Pvt Ltd.</title>
        <meta name="description" content="Stackzenith IT Solutions Pvt Ltd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
         <HeroSection />
      <AboutCompany />
      <FeauturesPage />
         <ServicesSection />
         <TestmonialsSection />
        {/* <NewsLetterSection />  */}
   </div>
  )
}
