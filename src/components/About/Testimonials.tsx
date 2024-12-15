import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <section className="flex items-center bg-white lg:h-screen dark:bg-gray-800">
    <div className="p-4 mx-auto max-w-7xl">
      <div className="mb-20 text-center">
        <h1 className="mb-4 text-3xl font-bold dark:text-white">
          {" "}
          Testimonials{" "}
        </h1>
        <p className="max-w-xl mx-auto text-gray-500">
        Discover the experiences that keep our community thriving. Our members share their journeys, celebrating the transformations and successes they've achieved with us. It's not just about the goals they've reached, it's about the confidence they've gained and the lifelong habits they've formed. Here's what they have to say.
        </p>
      </div>
      <div className="flex ">
        <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative mb-10 border-b-4 border-orange-500 ">
            <div className="z-20 pt-8 pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute top-0 left-0 w-20 h-20 opacity-10"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
              <div className="text-center">
                <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                  <div className="absolute w-24 h-24 border-t-4 border-r-4 border-orange-400 -top-4 -right-4"></div>
                  <Image
                    className="object-cover w-full h-full"
                    src="/assets/images/piyush.jpeg"
                    alt=""
                    width={400}
                    height={400}
                  />
                  <div className="absolute w-24 h-24 border-b-4 border-l-4 border-orange-400 -bottom-4 -left-4"></div>
                </div>
              </div>
              <p className="mb-4 text-base leading-7 text-gray-400">
              Orchid Company truly delivers what they promise! I needed quick home maintenance services, and they provided a skilled professional in no time. The process was seamless, and the pricing was fair. I highly recommend them to anyone looking for hassle-free, high-quality service!
              </p>
              <h2 className="text-lg font-bold leading-9 text-black dark:text-white">
                Piyush Jain
              </h2>
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </div>
          </div>
          <div className="relative mb-10 border-b-4 border-orange-500 ">
            <div className="z-20 pt-8 pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute top-0 left-0 w-20 h-20 opacity-10"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
              <div className="text-center">
                <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                  <div className="absolute w-24 h-24 border-t-4 border-r-4 border-orange-400 -top-4 -right-4"></div>
                  <Image
                    className="object-cover w-full h-full"
                    src="/assets/images/anshu.jpeg"
                    alt=""
                    width={400}
                    height={400}
                  />
                  <div className="absolute w-24 h-24 border-b-4 border-l-4 border-orange-400 -bottom-4 -left-4"></div>
                </div>
              </div>
              <p className="mb-4 text-base leading-7 text-gray-400">
              I’ve used Orchid Company multiple times for cleaning and other services. The team is punctual, professional, and trustworthy. Their ‘Happiness Promise’ is real—they ensure customer satisfaction every step of the way. I couldn’t ask for more!
              </p>
              <h2 className="text-lg font-bold leading-9 text-black dark:text-white">
               Anshu Bhardawaj
              </h2>
              {/* <span className="block text-xs font-semibold text-orange-500 uppercase dark:text-orange-300">
                Administrator
              </span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </div>
          </div>
          <div className="relative mb-10 border-b-4 border-orange-500 ">
            <div className="z-20 pt-8 pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute top-0 left-0 w-20 h-20 opacity-10"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
              <div className="text-center">
                <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                  <div className="absolute w-24 h-24 border-t-4 border-r-4 border-orange-400 -top-4 -right-4"></div>
                  <Image
                    className="object-cover w-full h-full"
                    src="/assets/images/rajat.jpg"
                    alt=""
                    width={400}
                    height={400}
                  />
                  <div className="absolute w-24 h-24 border-b-4 border-l-4 border-orange-400 -bottom-4 -left-4"></div>
                </div>
              </div>
              <p className="mb-4 text-base leading-7 text-gray-400">
              From start to finish, Orchid Company impressed me with their professionalism and attention to detail. Booking a service was simple, and the tasker they sent did an incredible job. It’s rare to find such a reliable platform. Highly recommended!
              </p>
              <h2 className="text-lg font-bold leading-9 text-black dark:text-white">
                Rajat Tiwari
              </h2>
              {/* <span className="block text-xs font-semibold text-orange-500 uppercase dark:text-orange-300">
                Chief Director
              </span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Testimonials