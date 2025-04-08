'use client';
import Specialties from './components/sections/specialties';
import MyWorks from './components/sections/works';
import Contact from './components/sections/contact';
import { Header } from './components/sections/header';
import Footer from './components/sections/footer';
import Divider from '@/components/divider';
import MenuNav from './components/sections/menu';
import { SectionsIndex } from './components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <MenuNav />

      <Header />

      <SectionsIndex className="w-full ">
        <Specialties />
        <Divider />
        <MyWorks />
        <Contact />
      </SectionsIndex>

      <Footer />
    </main>
  );
}
