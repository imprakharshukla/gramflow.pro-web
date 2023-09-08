import Link from "next/link";

const Brand = () => (
  <div>
    <Link href="/" className="flex items-center gap-x-4 mt-4">
      <img src="/logo.svg" width={30} height={50} alt="Blinder logo" />
        <span className="text-gray-800 font-bold text-xl">GramFlow</span>
    </Link>
  </div>
);
export default Brand;
