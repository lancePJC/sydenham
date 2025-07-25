// pages/index.tsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MainBranches from "@/components/Branches/MainBranches";
import CategorySlider from '@/components/CategorySlider/CategorySlider';
import AboutPage from '@/components/About/About';
import SubBranches from '@/components/Branches/SubBranches';

export default function Home() {
  return (
    <>
      <CategorySlider/>
      <MainBranches />
      <SubBranches/>
      <AboutPage/>
    </>
  );
}
