'use client';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import classNames from 'classnames';
import { TfiWorld } from 'react-icons/tfi';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import Link from 'next/link';

interface Props {
  categories: {
    title: string;
    url: string;
    children: { title: string; url: string }[];
  }[];
}

const MobilMenu = ({ categories = [] }: Props) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <>
      <RxHamburgerMenu
        className="md:hidden cursor-pointer"
        size={24}
        onClick={() => setIsShowMenu(!isShowMenu)}
      />
      <div
        className={classNames(
          'fixed top-0 md:hidden  transform transition-all duration-1000 bg-[#0a0a0a] w-full h-full flex flex-col',
          {
            'right-[-3900px]': !isShowMenu,
            'right-0': isShowMenu,
          }
        )}
      >
        <div className="w-full mb-auto p-8 flex flex-col gap-8">
          <div className="flex justify-between">
            <h1>MENÜ</h1>
            <CgClose size={25} onClick={() => setIsShowMenu(!isShowMenu)} />
          </div>
          <div className="w-full flex flex-col gap-5">
            {categories.map((category, index) => (
              <Link key={index} className="w-full text-2xl" href={category.url}>
                {category.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full h-[60px] bg-[#1e1e1e] mt-auto justify-between flex p-8  items-center">
          <div className="flex gap-2">
            <TfiWorld size={24} />
            <p>TR</p>
          </div>
          <div className="flex gap-3">
            <FaFacebookF size={19} />
            <FaXTwitter size={20} />
            <FaInstagram size={20} />
            <FaLinkedinIn size={20} />
            <FaYoutube size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilMenu;
