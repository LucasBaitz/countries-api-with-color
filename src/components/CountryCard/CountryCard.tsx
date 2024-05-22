import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CountryCardProps {
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
  alpha2Code: string;
}

const CountryCard: React.FC<CountryCardProps> = ({
  flag,
  name,
  population,
  region,
  capital,
  alpha2Code,
}) => {
  return (
    <div className="w-full dark:bg-[#2B3743] shadow-md rounded">
      <Link href={`country/${alpha2Code}`}>
        <Image
          src={flag}
          alt={`${name}'s flag`}
          width={1}
          height={1}
          className="w-full h-[150px] object-cover rounded-t"
        />
      </Link>
      <div className="p-5 space-y-5 mb-5">
        <h2 className="font-bold ">{name}</h2>
        <ul className="space-y-2">
          <li className="text-sm ">
            <span className="font-semibold">Population</span>:{" "}
            {population}
          </li>
          <li className="text-sm ">
            <span className="font-semibold">Region</span>: {region}
          </li>
          <li className="text-sm ">
            <span className="font-semibold">Capital</span>: {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
