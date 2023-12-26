import React, { useState, useEffect } from "react";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useAppSelector } from "@/store/redux-hooks";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { Skeleton } from "../ui/skeleton";
import StoreIcon from "@mui/icons-material/Store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import parseGooglePlace from "parse-google-place";
const Landing = () => {
  const { city } = useAppSelector((state) => state.location);
  const { categories } = useAppSelector((state) => state.categories);
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState(city);
  const router = useRouter();
  const handleSearch = () => {
    router.push(`/search?city=${address}&category=${category}`);
  };

  useEffect(() => {
    setAddress(city);
  }, [city]);

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

  return (
    <div className="w-full h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 image-wrap -z-10 min-h-screen h-screen overflow-hidden bg-no-repeat bg-center bg-cover"></div>
      <div className="w-full flex items-center justify-center flex-col gap-8 px-4 xs:px-12 sm:px-28 md:px-36">
        <h6 className="text-secondary inter text-5xl md:text-7xl font-bold text-center ">
          Hire <span className="text-primary font-extrabold">Experts</span> &
          Get Your Job Done
        </h6>
        <div className="xs:w-full px-4 py-4 md:py-1 rounded-lg shadow bg-background  md:gap-8 items-center grid grid-cols-12 space-y-4 md:space-y-0 ">
          <div className="w-full flex items-center gap-2 col-span-12 md:border-none border border-gray-400 p-2 md:p-0 rounded z-40 md:col-span-5 md:border-r md:border-r-primary">
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
                        "w-full sm:w-[20rem] md:w-[40rem] bg-transparent outline-none md:border-none text-lg  text-secondary-foreground opacity-90",
                    })}
                  />
                  {suggestions.length > 0 && (
                    <div className="absolute w-60  flex flex-col gap-1 bg-background p-2 rounded">
                      {loading && (
                        <Skeleton className="h-full w-full"></Skeleton>
                      )}
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
          <div className="w-full flex items-center gap-2 col-span-12 md:border-none border border-gray-400 p-1 px-2 md:p-2 rounded z-40 md:col-span-5 md:border-r md:border-r-primary">
            <StoreIcon className="text-primary" />
            <Select value={category} onValueChange={setCategory} >
              <SelectTrigger className="w-full bg-transparent outline-none border-none text-lg  text-secondary-foreground opacity-90 shadow-none focus:ring-0    ">
                <SelectValue placeholder="Select Category" className="0" />
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
          <Button className="col-span-12 md:col-span-2" onClick={handleSearch} >Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

