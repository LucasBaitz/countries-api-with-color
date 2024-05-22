import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface CountryPageLayoutProps {
  children: ReactNode;
}

const CountryPageLayout: React.FC<CountryPageLayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#202D36]">
      <div className="flex items-end w-full pt-10 container">
        <Link
          href="/"
          className="bg-white dark:bg-[#2B3743] flex gap-2 py-2 px-10 shadow-3xl rounded-sm"
        >
          <ArrowLeft />
          Back
        </Link>
      </div>
      {children}
    </div>
  );
};

export default CountryPageLayout;
