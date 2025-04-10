'use client';
import Specialties from './components/sections/specialties';
import MyWorks from './components/sections/works';
import Contact from './components/sections/contact';
import { Header } from './components/sections/header';

import Divider from '@/components/divider';
import { SectionsIndex } from './components';

export default function Home() {
  return (
    <>
      <Header />

      <SectionsIndex className="w-full ">
        <Specialties />
        <Divider />
        <MyWorks />
        <Contact />
      </SectionsIndex>
    </>
  );
}
