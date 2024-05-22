"use client";
import countriesData from "@/app/data.json";
import CountryCard from "@/components/CountryCard/CountryCard";
import { useState } from "react";
import SelectFilter from "@/components/SelectFilter/SelectFilter";
import { Search } from "lucide-react";
import { Country } from "@/interfaces/Country";

const Home: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>(countriesData);
  const [filtered, setFiltered] = useState<Country[]>([]);

  const handleFilter = (value: string) => {
    console.log(value);
    setFiltered(countries.filter((c) => c.region === value));
  };

  const handleSearchFilter = (value: string) => {
    setFiltered(
      countries.filter((c) =>
        c.name.toUpperCase().includes(value.toUpperCase())
      )
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center px-10 lg:px-24 bg-[#FAFAFA] dark:bg-[#202D36]">
      <div className="flex flex-col lg:flex-row justify-start  lg:justify-between w-full space-y-5 my-10">
        <label
          htmlFor=""
          className="flex items-center align-middle w-full max-w-[500px] gap-5 bg-white dark:bg-[#2B3743] rounded-lg shadow-md"
        >
          <Search color="#818181" className="ml-5" />{" "}
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => handleSearchFilter(e.target.value)}
            className="bg-inherit ring-0 border-none outline-none h-[60px] w-full rounded-lg"
          />
        </label>
        <SelectFilter onSelect={handleFilter} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 mb-10">
        {filtered.length <= 0
          ? countries.map((c) => (
              <CountryCard
                key={c.name}
                flag={c.flags.svg}
                capital={c.capital}
                name={c.name}
                population={c.population.toLocaleString("en-US")}
                region={c.region}
                alpha2Code={c.alpha2Code}
              />
            ))
          : filtered.map((c) => (
              <CountryCard
                key={c.name}
                flag={c.flags.svg}
                capital={c.capital}
                name={c.name}
                population={c.population.toLocaleString("en-US")}
                region={c.region}
                alpha2Code={c.alpha2Code}
              />
            ))}
      </div>
    </main>
  );
};

export default Home;
