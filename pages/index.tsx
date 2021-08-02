import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="ml-28 mt-24">
        <h1 className="font-poppins font-bold text-4xl text-gray-700 w-100">
          Your <span className="text-blue-500">Secure</span> And{' '}
          <span className="text-blue-500">Free</span> solution for budgeting.
        </h1>
        <p className="text-gray-500 font-poppins font-bold text-sm mt-6">
          Build your budget, you <span className="text-purple-500">will</span>{' '}
          love it.
        </p>
        <p className="text-gray-500 font-poppins font-bold text-sm">
          Anybody can do it, anytime, anywhere.
        </p>
        <Link href="/dashboard" passHref>
          <button className="mt-10 p-2 border-2 border-purple-400 hover:bg-purple-400 rounded-lg w-64 text-sm font-semibold font-poppins text-black hover:text-white">
            Try our demo version
          </button>
        </Link>
      </div>
    </>
  );
}
