import HeaderLinkItem from './HeaderLinkItem';

const links: { name: string; to: string }[] = [
  { name: 'Home', to: '/' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'About', to: '/about' },
  { name: 'Reviews', to: '/reviews' },
];

export default function Header() {
  return (
    <div className="flex mx justify-between w-full px-28 py-10 items-center">
      <h1 className="text-2xl text-blue-500 font-bold">BudjetGenix</h1>
      <div className="">
        {links.map((link, index) => (
          <HeaderLinkItem key={index} name={link.name} to={link.to} />
        ))}
      </div>
      <button className="filter drop-shadow-button text-blue-500 w-52 bg-white rounded-full px-4 py-3 font-bold text-lg">
        Open Dashboard
      </button>
    </div>
  );
}
