// pages/index.tsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';
import MainBranches from "@/components/Branches/MainBranches";
import CategorySlider from '@/components/CategorySlider/CategorySlider';
import SubBranches from '@/components/Branches/SubBranches';
import AboutPage from '@/components/About/About';

export default function Home() {
  return (
    <>
     <Head>
        <title>Sydenham Enterprises | Beauty, Beverages, Construction, IT & Solar</title>
        <meta name="description" content="Shop Beauty & Lifestyle, Solar Products, Beverages, Construction & IT Solutions at Sydenham Enterprises." />
        <meta name="keywords" content="Skincare, Solar, Construction, ERP, Coffee, Tea, Beauty, Kenya" />
        <meta property="og:title" content="Sydenham Enterprises" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lancepjc.github.io/sydenham" />
        <meta property="og:image" content="https://lancepjc.github.io/sydenham/logo.png" />
      </Head>

      <CategorySlider/>
      <MainBranches />
      <SubBranches/>
      <AboutPage/>
    </>
  );
}
