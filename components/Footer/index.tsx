import React from 'react';
import vector1 from '@/images/vector1.png';
import Image from 'next/image';
import BeeStudio from '@/images/bee-studio.png';
import facebook from '@/images/facebook.png';
import x from '@/images/x.png';
import instagram from '@/images/instagram.png';
import footer from '@/images/footer.png';

const Footer = () => {
  const footerData = [
    {
      title: 'Kurumsal',
      subTitle: [
        'Biz Kimiz?',
        'Başkanın Mesajı',
        'Yönetim Kurulumuz',
        'Temsilciliklerimiz',
      ],
    },
    {
      title: 'Etkinlikler',
      subTitle: ['Eğitim Takvimimiz'],
    },
    {
      title: 'Eğitimler',
      subTitle: [
        'Fonsiyonel Eczacılık Eğitimi',
        'Aromaterapi Akademisi',
        ,
        'Eğitim Programı',
      ],
    },
    {
      title: 'İlgi Alanlarımız',
      subTitle: [
        'Aromaterapi',
        'Fitoterapi',
        'Vitamin Gıda Takviyesi',
        'Majistral',
      ],
    },
    {
      title: 'İletişim',
      subTitle: [
        'Viyana Caddesi 10/6 Merkez Yozgat',
        '+90 533 090 93 29',
        'danis@ecozder.org',
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10 p-10 text-white bg-cover bg-black">
      <div className="p-6">
        <Image src={vector1} alt="logo" width={199} height={81} />
      </div>
      <div className="mx-auto container flex justify-between text-base">
        {footerData.map((data, index) => (
          <div key={index} className="flex flex-col">
            <h2>{data.title}</h2>

            <div className="space-y-3">
              {data.subTitle.map((subtitle, index) => (
                <p key={index} className="text-white/90">
                  {subtitle}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <span className="border-t border-[#42494C]"></span>
      <div className="flex justify-between">
        <div className="text-xs">
          © 2025 Eczacı Çözüm Derneği tüm hakları saklıdır.
        </div>

        <div className="text-xs italic flex gap-1 ">
          <Image src={BeeStudio} alt="bee-studio" width={55} height={1} />
          <span className=" flex -mb-0.5 items-end">
            {' '}
            tarafından geliştirilmiştir.
          </span>
        </div>

        <div className="flex gap-2 ">
          <Image
            src={facebook}
            alt="bee-studio"
            width={44}
            height={44}
            className="align-bottom"
          />
          <Image
            src={x}
            alt="bee-studio"
            width={44}
            height={44}
            className="align-bottom"
          />
          <Image
            src={instagram}
            alt="bee-studio"
            width={44}
            height={44}
            className="align-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
