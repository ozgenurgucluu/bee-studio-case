import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

  return (
    <footer className="bg-[url('/images/footer.png')] bg-cover bg-center">
      <div className="flex flex-col gap-10 p-10 text-white bg-cover bg-black/70">
        <div className="p-6">
          <Image src="/images/vector1.png" alt="logo" width={199} height={81} />
        </div>
        <div className="mx-auto container flex-col md:flex-row flex gap-7 p-6 md:p-0 justify-between text-base">
          {footerData.map((data, index) => (
            <div key={index} className="flex flex-col">
              <h2>{data.title}</h2>
              {data.links.map((link, index) => (
                <Link key={index} href={link.path} className="text-[#ACACAC]">
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
              {' '}
              tarafından geliştirilmiştir.
            </span>
          </Link>

          <div className="flex gap-2 ">
            <Link href="/">
              <Image
                src="/images/facebook.png"
                alt="bee-studio"
                width={44}
                height={44}
                className="align-bottom"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/x.png"
                alt="bee-studio"
                width={44}
                height={44}
                className="align-bottom"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/instagram.png"
                alt="bee-studio"
                width={44}
                height={44}
                className="align-bottom"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
