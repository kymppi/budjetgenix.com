import Link from 'next/link';

interface HeaderLinkItemProps {
  to: string;
  name: string;
}

export default function HeaderLinkItem({ to, name }: HeaderLinkItemProps) {
  return (
    <Link href={to}>
      <a className="text-gray-500 hover:text-blue-400 text-lg mx-12 font-medium font-ubuntu">
        {name}
      </a>
    </Link>
  );
}
