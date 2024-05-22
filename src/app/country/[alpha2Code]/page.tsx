"use client";
import React, { useEffect } from "react";
import countries from "@/app/data.json";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CountryPageProps {
  params: {
    alpha2Code: string;
  };
}

const CountryPage: React.FC<CountryPageProps> = ({ params }) => {
  const country = countries.find(
    (c) => c.alpha2Code.toUpperCase() === params.alpha2Code.toUpperCase()
  );

  return (
    <main className="flex min-h-screen lg:mt-10 lg:flex-col lg:items-center p-8 lg:px-24">
      <div className="flex flex-col md:flex-row justify-around w-full md:gap-28">
        <div className="w-full">
          <Image
            src={country?.flags.svg!}
            width={500}
            height={500}
            alt={`${country?.name}'s flag`}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col w-full lg:py-12 mt-10 md:mt-0">
          <h1 className="font-black text-3xl mb-5">{country?.name}</h1>
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="space-y-4 mb-5">
              <p className="font-bold text-sm">
                Native Name:{" "}
                <span className="font-light">{country?.nativeName}</span>
              </p>
              <p className="font-bold text-sm">
                Population:{" "}
                <span className="font-light">
                  {country?.population.toLocaleString()}
                </span>
              </p>
              <p className="font-bold text-sm">
                Region: <span className="font-light">{country?.region}</span>
              </p>
              <p className="font-bold text-sm">
                Sub Region:{" "}
                <span className="font-light">{country?.subregion}</span>
              </p>
              <p className="font-bold text-sm">
                Capital: <span className="font-light">{country?.capital}</span>
              </p>
            </div>
            <div className="space-y-4 mt-6 md:mt-0">
              <p className="font-bold text-sm">
                Top Level Domain:{" "}
                <span className="font-light">{country?.topLevelDomain}</span>
              </p>
              <p className="font-bold text-sm">
                Currencies:{" "}
                <span className="font-light">
                  {country?.currencies?.map((cc) => (
                    <span key={cc.code}>{cc.name}</span>
                  ))}
                </span>
              </p>
              <p className="font-bold text-sm">
                Languages:
                {country?.languages?.map((cc) => (
                  <span key={cc.iso639_1} className="ml-1">
                    {cc.name}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 mt-10 w-full">
            <span className="font-bold  text-nowrap">Border Countries: </span>
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
              {country?.borders?.map((bc) => (
                <Link
                  key={bc}
                  href={`/country/${
                    countries.find((c) => c.alpha3Code === bc)?.alpha2Code
                  }`}
                  className="p-1 text-center dark:bg-[#2B3743] shadow-2xl rounded-md text-[12px] w-full"
                >
                  {
                    countries
                      .find((c) => c.alpha3Code === bc)
                      ?.name.split(" ")[0]
                  }
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryPage;
