import React from 'react';
import Image from 'next/image';
import vector from '@/images/vector.png';
import { SlArrowDown } from 'react-icons/sl';
import Link from 'next/link';
import Button from '@/components/Button';

const Header = () => {
  const categories = [
    {
      title: 'Kurumsal',
      url: '/kurumsal',
      children: [
        { title: 'Alt Başlık 1', url: '/alt başlık1' },
        { title: 'Alt Başlık 2', url: '/alt başlık2' },
        { title: 'Alt Başlık 3', url: '/alt başlık3' },
      ],
    },
    {
      title: 'Etkinlikler',
      url: '/etkinlikler',
    },
    {
      title: 'Eğitimler',
      url: '/eğitimler',
    },
    {
      title: 'İlgi Alanlarımız',
      url: '/ilgi-alanlarımız',
      children: [
        { title: 'Alt Başlık 1', url: '/alt başlık1' },
        { title: 'Alt Başlık 2', url: '/alt başlık2' },
        { title: 'Alt Başlık 3', url: '/alt başlık3' },
      ],
    },
    {
      title: 'İletişim',
      url: '/iletişim',
    },
  ];

  return (
    <div className="bg-black/45 w-full">
      <div className="container mx-auto flex justify-between text-white md:h-[88px]  items-center">
        <div>
          <Image src={vector} width={108} height={44} alt="logo" />
        </div>
        <div className="flex gap-7">
          {categories.map((category, index) => (
            <div className="flex items-center gap-1.5" key={index}>
              <Link href={category.url}>
                <h1>{category.title}</h1>
              </Link>

              {category.children?.length > 0 && (
                <SlArrowDown className="w-2.5 h-3" />
              )}
            </div>
          ))}
        </div>
        <div>
          <Button size="medium" color="white" title="Giriş Yap" />
        </div>
      </div>
    </div>
  );
};

export default Header;
