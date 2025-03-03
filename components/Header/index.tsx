import React from 'react';
import Image from 'next/image';
import { SlArrowDown } from 'react-icons/sl';
import Link from 'next/link';
import Button from '@/components/Button';
import { useRef } from 'react';
import { useState } from 'react';
import MobilMenu from '../MobilMenu';

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
      children: [],
    },
    {
      title: 'Eğitimler',
      url: '/eğitimler',
      children: [],
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
      children: [],
    },
  ];

  return (
    <header className="bg-black/45 w-full">
      <div className="container mx-auto flex justify-between text-white p-5  items-center">
        <div>
          <Image src="/images/vector.png" width={108} height={44} alt="logo" />
        </div>
        <div className="gap-7 hidden md:flex">
          {categories.map((category, index) => (
            <div
              className="flex items-center gap-1.5 relative group "
              key={index}
            >
              <Link className="flex gap-2 items-center" href={category.url}>
                <h1>{category.title}</h1>
                {category.children?.length > 0 && (
                  <SlArrowDown className="w-2.5 h-3" />
                )}
              </Link>
              {category.children?.length > 0 && (
                <div>
                  <div className="bg-black/65 w-[160px]  absolute top-full mt-7.5 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col gap-2 p-3 py-8 justify-center items-center ">
                    {category.children.map((subTitle, index) => (
                      <Link href="/" key={index}>
                        {subTitle.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <Button size="medium" color="white" title="Giriş Yap" />
        </div>
        <MobilMenu categories={categories} />
      </div>
    </header>
  );
};

export default Header;
