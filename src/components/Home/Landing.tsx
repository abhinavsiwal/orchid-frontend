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
const Landing = () => {
  const { city } = useAppSelector((state) => state.location);
  const [address, setAddress] = useState(city);

  useEffect(() => {
    setAddress(city);
  }, [city]);

  const handleSelect = async (selected: any) => {
    try {
      const results = await geocodeByAddress(selected);
      setAddress(selected);
      console.log("Selected place:", results[0]);
    } catch (error) {
      console.error("Error selecting place:", error);
    }
  };

  return (
    <div className="w-full h-screen  flex items-center justify-center">
      <div className="image-wrap absolute h-screen -z-10 h-sc">
        <Image
          src="/assets/images/bg-home.jpg"
          alt="home"
          width={1200}
          height={1200}
        />
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-8 px-36">
        <h6 className="text-secondary inter text-7xl font-bold ">
          Hire{" "}
          <span className="text-primary font-extrabold underline">Experts</span>{" "}
          & Get Your Job Done
        </h6>
        <div className="w-full p-4 rounded-lg shadow bg-background  gap-8 items-center grid grid-cols-12">
          <div className="w-full flex items-center gap-2 col-span-5 border-r border-r-primary">
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
                        "w-[40rem] bg-transparent outline-none border-none text-lg  text-secondary-foreground opacity-90",
                    })}
                  />
                  <div className="absolute w-60 flex flex-col gap-1 bg-background p-2 rounded">
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
                </div>
              )}
            </PlacesAutocomplete>
          </div>
          <div className="w-full flex items-center gap-2 col-span-5 border-r border-r-primary">
            <StoreIcon className="text-primary" />
            <Select value="">
              <SelectTrigger className="w-full bg-transparent outline-none border-none text-lg  text-secondary-foreground opacity-90 shadow-none focus:ring-0    ">
                <SelectValue placeholder="Select Category" className="0" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="col-span-2">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
