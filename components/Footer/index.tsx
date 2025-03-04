import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiFacebookLine } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  const footerData = [
    {
      title: 'Kurumsal',
      links: [
        { title: 'Biz Kimiz?', path: '/kurumsal/biz-kimiz' },
        { title: 'Başkanın Mesajı', path: '/kurumsal/baskanin-mesaji' },
        { title: 'Yönetim Kurulumuz', path: '/kurumsal/yonetim-kurulu' },
        { title: 'Temsilciliklerimiz', path: '/kurumsal/temsilcilikler' },
      ],
    },
    {
      title: 'Etkinlikler',
      links: [
        { title: 'Eğitim Takvimimiz', path: '/etkinlikler/egitim-takvimi' },
      ],
    },
    {
      title: 'Eğitimler',
      links: [
        {
          title: 'Fonksiyonel Eczacılık Eğitimi',
          path: '/egitimler/fonksiyonel-eczacilik',
        },
        {
          title: 'Aromaterapi Akademisi',
          path: '/egitimler/aromaterapi-akademisi',
        },
        { title: 'Eğitim Programı', path: '/egitimler/egitim-programi' },
      ],
    },
    {
      title: 'İlgi Alanlarımız',
      links: [
        { title: 'Aromaterapi', path: '/ilgi-alanlari/aromaterapi' },
        { title: 'Fitoterapi', path: '/ilgi-alanlari/fitoterapi' },
        {
          title: 'Vitamin Gıda Takviyesi',
          path: '/ilgi-alanlari/vitamin-gida-takviyesi',
        },
        { title: 'Majistral', path: '/ilgi-alanlari/majistral' },
      ],
    },
    {
      title: 'İletişim',
      links: [
        { title: 'Adres', path: '/iletisim#adres' },
        { title: 'Telefon', path: '/iletisim#telefon' },
        { title: 'E-posta', path: '/iletisim#email' },
      ],
    },
  ];

  const socialMediaIcon = [
    { icon: <RiFacebookLine size={24} />, link: '' },
    { icon: <FaXTwitter size={24} />, link: 'https://x.com/beestudioinc' },
    {
      icon: <FaInstagram size={24} />,
      link: 'https://www.instagram.com/beestudioinc',
    },
  ];

  return (
    <>
      <div className="container mx-auto flex justify-end mt-16   mb-8">
        <Link href="/">
          <Image
            src="/images/whatsapp.png"
            alt="whatsap"
            width={190}
            height={66}
          />
        </Link>
      </div>
      <footer className="bg-[url('/images/footer.png')] bg-cover bg-center">
        <div className="flex flex-col gap-10 p-10 text-white bg-cover bg-black/70">
          <div className="p-6">
            <Image
              src="/images/vector1.png"
              alt="logo"
              width={199}
              height={81}
            />
          </div>
          <div className="mx-auto container flex-col md:flex-row flex gap-7 p-6 md:p-0 justify-between text-base">
            {footerData.map((data, index) => (
              <div key={index} className="flex flex-col">
                <h2>{data.title}</h2>
                {data.links.map((link, index2) => (
                  <Link
                    key={index2}
                    href={link.path}
                    className="text-[#ACACAC]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <span className="border-t border-[#42494C] hidden md:flex"></span>
          <div className="flex flex-col md:flex-row gap-5 items-center   md:justify-between">
            <div className="text-xs">
              © 2025 Eczacı Çözüm Derneği tüm hakları saklıdır.
            </div>

            <Link
              className="text-xs  flex gap-1 "
              target="_blank"
              href="https://bee.studio/tr"
            >
              <Image
                src="/images/bee-studio.png"
                alt="bee-studio"
                height={20}
                width={58}
              />
              <span className="flex -mb-0.5 items-end">
                tarafından geliştirilmiştir.
              </span>
            </Link>

            <div className="flex gap-2">
              {socialMediaIcon.map((icon, index) => (
                <Link
                  key={index}
                  target="_blank"
                  href={icon.link}
                  className="bg-white text-black rounded-full w-12 h-12 flex justify-center items-center"
                >
                  <span> {icon.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
