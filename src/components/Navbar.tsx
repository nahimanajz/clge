import { INavbarProps } from "@/shared/props";
import Link from "next/link";
import { FC } from "react";
import { FiSearch } from "react-icons/fi";


const NavBar: FC<INavbarProps> = ({ onFilter, children }) => {
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilter(e.target.value);
  };

  return (
    <div>
    
      <nav className="bg-white p-4  fixed z-10 w-full mt-0">
        <div className="flex justify-between flex-wrap items-center">
        <div>
          <Link href="/" className="text-primary text-2xl font-semibold">
            {" "}
            Hotel&Co
          </Link>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by country"
            onChange={handleFilter}
            className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FiSearch className="text-primary" />
          </div>
        </div>
        </div>
        <div>
        {children}
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
