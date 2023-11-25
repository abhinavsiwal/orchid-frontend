import Image from "next/image";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { services } = await fetch(
    `${process.env.backendUrl}/services/getAllServices`
  ).then((res) => res.json());

  return (

  
      <div className="w-full flex flex-col gap-16 md:py-28 ">
        <div className="w-full">{children}</div>
        <div className="w-full px-8 sm:px-12 md:px-20 lg:px-32 py-16 flex flex-col gap-12 bg-primary">
          <div className="w-full  flex md:flex-row flex-col justify-between gap-2 ">
            <div className="flex flex-col md:items-start items-center gap-4">
              <h6 className="spartan text-lg md:text-xl text-blue uppercase tracking-widest font-medium">
                Services
              </h6>
              <h4 className="font-bold text-3xl md:text-4xl text-primary md:text-start text-center inter tracking-wide text-white ">
                All Services
              </h4>
            </div>
            <p className=" inter break-words md:text-start text-center  text-md md:text-lg font-light text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              usmod <br />
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-full grid grid-cols-4 gap-4">
          {services?.map((service: any) => {
            return (
              <div className="w-full flex flex-col items-center gap-2  " key={service?._id} >
                <div className=" flex items-center justify-center w-full ">
                  <Image
                    src={service?.image}
                    width={600}
                    height={600}
                    alt={service?.name}
                    className="rounded-3xl cursor-pointer   "
                  />
                </div>

                <p className="text-center text-white font-semibold text-lg inter">
                  {service?.name}
                </p>
              </div>
            );
          })}
        </div>
        </div>
    
      </div>

  );
}
