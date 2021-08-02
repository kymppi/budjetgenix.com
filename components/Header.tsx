import Image from 'next/image';
import HeaderLinkItem from './HeaderLinkItem';

const links: { name: string; to: string }[] = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Reviews', to: '/reviews' },
];

export default function Header() {
  return (
    <div className="flex mx justify-between w-full px-28 py-10 items-center">
      <h1 className="text-2xl text-blue-500 font-semibold font-poppins">
        BudjetGenix
      </h1>
      <div className="">
        {links.map((link, index) => (
          <HeaderLinkItem key={index} name={link.name} to={link.to} />
        ))}
      </div>
      <div className="">
        <Image
          src="https://lot-of-micro-plastic.is-inside.me/ZTucgPFu.png"
          alt="PFP"
          height={40}
          width={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
