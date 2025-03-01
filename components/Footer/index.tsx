import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const footerData = [
    {
      title: 'Kurumsal',
      links: [
        'Biz Kimiz?',
        'Başkanın Mesajı',
        'Yönetim Kurulumuz',
        'Temsilciliklerimiz',
      ],
    },
    {
      title: 'Etkinlikler',
      links: ['Eğitim Takvimimiz'],
    },
    {
      title: 'Eğitimler',
      links: [
        'Fonsiyonel Eczacılık Eğitimi',
        'Aromaterapi Akademisi',
        ,
        'Eğitim Programı',
      ],
    },
    {
      title: 'İlgi Alanlarımız',
      links: [
        'Aromaterapi',
        'Fitoterapi',
        'Vitamin Gıda Takviyesi',
        'Majistral',
      ],
    },
    {
      title: 'İletişim',
      links: [
        'Viyana Caddesi 10/6 Merkez Yozgat',
        '+90 533 090 93 29',
        'danis@ecozder.org',
      ],
    },
  ];

  return (
    <footer className="bg-[url('/images/footer.png')] bg-cover bg-center">
      <div className="flex flex-col gap-10 p-10 text-white bg-cover bg-black/70">
        <div className="p-6">
          <Image src="/images/vector1.png" alt="logo" width={199} height={81} />
        </div>
        <div className="mx-auto container flex-col md:flex-row flex gap-5 p-6 md:p-0 justify-between text-base">
          {footerData.map((data, index) => (
            <div key={index} className="flex flex-col">
              <h2>{data.title}</h2>

              {data.links.map((link, index) => (
                <Link key={index} href="/" className="text-[#ACACAC]">
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <span className="border-t border-[#42494C]"></span>
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
            <span className=" flex -mb-0.5 items-end">
              {' '}
              tarafından geliştirilmiştir.
            </span>
          </Link>

          <div className="flex gap-2 ">
            <Image
              src="/images/facebook.png"
              alt="bee-studio"
              width={44}
              height={44}
              className="align-bottom"
            />
            <Image
              src="/images/x.png"
              alt="bee-studio"
              width={44}
              height={44}
              className="align-bottom"
            />
            <Image
              src="/images/instagram.png"
              alt="bee-studio"
              width={44}
              height={44}
              className="align-bottom"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
