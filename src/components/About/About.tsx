import React from 'react'

const About = () => {
  return (
    <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
    <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
      <div className="px-4 mb-10 md:text-center md:mb-20">
        <p className="mb-2 text-lg font-semibold text-orange-500 dark:text-gray-400">
          About Us
        </p>
        <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
          What we do
        </h2>
        <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
          <div className="flex-1 h-2 bg-orange-200"></div>
          <div className="flex-1 h-2 bg-orange-400"></div>
          <div className="flex-1 h-2 bg-orange-300"></div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
          <img
            src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg"
            alt=""
            className="relative z-40 object-cover w-full h-96"
          />
        </div>
        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
          <h2 className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-orange-500 dark:border-orange-400 dark:text-gray-300">
            We are providing a better facility
          </h2>
          <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam
          </p>
          <ul className="mb-10">
            <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
              <span className="mr-3 text-orange-500 dark:text-orange-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-5 h-5 bi bi-patch-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
              </span>
              Lorem ipsum dolor sit amet, consectetur domino act
            </li>
            <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
              <span className="mr-3 text-orange-500 dark:text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-5 h-5 bi bi-patch-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
              </span>
              eli orem ipsum dolor sit amet, consectetur advice
            </li>
            <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
              <span className="mr-3 text-orange-500 dark:text-orange-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-5 h-5 bi bi-patch-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
              </span>
              Iron man ipsum dolor sit amet, consectetur adipiscing
            </li>
          </ul>
          <a
            href="#"
            className="px-4 py-3 text-orange-700 transition-all transform border border-orange-500 hover:bg-orange-600 dark:border-orange-400 dark:hover:bg-orange-500 dark:hover:text-gray-100 dark:hover:border-orange-500 dark:text-orange-400 hover:text-gray-100"
          >
            Discover more
          </a>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default About