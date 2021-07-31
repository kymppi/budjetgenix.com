import Link from 'next/link';

interface HeaderLinkItemProps {
  to: string;
  name: string;
}

export default function HeaderLinkItem({ to, name }: HeaderLinkItemProps) {
  return (
    <Link href={to}>
      <a className="hover:text-blue-400">{name}</a>
    </Link>
  );
}
