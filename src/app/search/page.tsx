"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "@/components/Layout/Loader";
import axios from "axios";
import { backendUrl } from "@/utils/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { Skeleton } from "@/components/ui/skeleton";
import StoreIcon from "@mui/icons-material/Store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/redux-hooks";
import parseGooglePlace from "parse-google-place";
const Page = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [services, setServices] = useState([]);
  const city = searchParams.get("city");
  const category = searchParams.get("category");
  const [address, setAddress] = useState(city || "");
  const [selectedCategory, setSelectedCategory] = useState(category || "");
  const { categories } = useAppSelector((state) => state.categories);
  const handleSelect = async (selected: any) => {
    try {
      const results = await geocodeByAddress(selected);
      const addressComponents = parseGooglePlace(results[0]);
      setAddress(addressComponents.city);
      console.log("Selected place:", results[0]);
    } catch (error) {
      console.error("Error selecting place:", error);
    }
  };

  const getServices = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${backendUrl}/service/filterServices?city=${address}&category=${selectedCategory}`
      );
      setServices(data.services);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setSelectedCategory(category || "");
    setAddress(city || "");
    getServices();
  }, [category, city]);

  return (
    <>
    <Loader loading={loading} />
    <div className="w-full flex flex-col gap-16 py-16 md:py-24">
      <div className="xs:w-full px-4 py-4 md:py-6 md:px-16 rounded-lg shadow bg-primary  md:gap-8 items-center grid grid-cols-12 space-y-4 md:space-y-0  ">
        <div className="w-full flex items-center gap-2 col-span-12 md:border-none border border-white p-2 md:p-0 rounded z-40 md:col-span-5 md:border-r md:border-r-white bg-white">
          <LocationOnIcon className="text-primary" />
          {/* <input
              type="text"
              placeholder="Enter Location"
              className="w-full bg-transparent outline-none border-none text-sm text-secondary-foreground"
              defaultValue={city}
            /> */}
          <PlacesAutocomplete
            value={address}
            onChange={(e) => setAddress(e)}
            onSelect={handleSelect}
            debounce={600}
            highlightFirstSuggestion={true}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search City",

                    className:
                      "w-full sm:w-[20rem] md:w-[40rem] bg-transparent outline-none md:border-none text-lg  text-secondary-foreground h-4 md:h-10 opacity-90 placeholder-black",
                  })}
                />
                {suggestions.length > 0 && (
                  <div className="absolute w-60  flex flex-col gap-1 bg-background p-2 rounded">
                    {loading && <Skeleton className="h-full w-full"></Skeleton>}
                    {suggestions.slice(0, 4).map((suggestion, index) => {
                      const className = suggestion.active
                        ? "cursor-pointer p-2 bg-background text-primary flex gap-1 items-center inter text-sm "
                        : "cursor-pointer p-2 bg-background text-secondary-foreground  opacity-70 flex gap-1 items-center inter text-sm ";
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                          })}
                          key={index}
                        >
                          <LocationOnIcon
                            className="text-secondary-foreground opacity-70"
                            fontSize="small"
                          />
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        <div className="w-full flex items-center gap-2 col-span-12 md:border-none border bg-white h-10 border-gray-400 p-1 px-2 md:p-2 rounded z-40 md:col-span-5 md:border-r md:border-r-white">
          <StoreIcon className="text-primary" />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full bg-transparent outline-none border-none text-lg  text-secondary-foreground opacity-90 shadow-none focus:ring-0    ">
              <SelectValue
                placeholder="Select Category"
                className="placeholder:text-gray-400"
              />
            </SelectTrigger>
            <SelectContent className="">
              {categories?.map((category) => {
                return (
                  <SelectItem value={category?._id} key={category?._id}>
                    {category?.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <Button
          className="col-span-12 md:col-span-2 text-primary bg-white hover:text-white "
          onClick={getServices}
        >
          Search
        </Button>
      </div>
      {services?.length>0 ?(

      <section className="w-full flex flex-col gap-8 px-8 sm:px-12 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services?.map((service: any) => {
            return (
              <div
                className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl"
                key={service?._id}
              >
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image
                    src={service?.images[0]}
                    width={400}
                    height={300}
                    alt={service?.name}
                    className="w-full h-72"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm text-slate-400">
                      {(Math.random() * (5 - 4) + 4).toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="mt-1 p-2">
                  <h2 className="text-slate-700">{service?.name}</h2>
                  <p className="mt-1 text-sm text-slate-400">{service?.city}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p>
                      <span className="text-lg font-bold text-orange-500">
                        {service?.price}
                      </span>
                      <span className="text-sm text-slate-400">
                        /{service?.serviceType}
                      </span>
                    </p>
                    <div className="group inline-flex rounded-xl bg-orange-100 p-2 px-3 hover:bg-orange-200">
                      <Link
                        href={`/service/${service?._id}`}
                        className="text-primary text-sm inter "
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    
      </section>
      ):(
        <div className="w-full h-full flex items-center justify-center">
          <h6 className="text-lg text-center  md:text-2xl text-slate-400">No Services Found, Try Searching Again with Different Filters</h6>
        </div>
      )}

</div>
</>

  );
};

export default Page;
