/* This example requires Tailwind CSS v2.0+ */
import { Fragment ,useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
 
  MenuIcon,

  XIcon,
} from '@heroicons/react/outline'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




const HomePage = () => {
  const [signInModal, setsignInModal] = useState(false);
  return (
    <div className="relative bg-primaryColor">
      <Popover className="relative bg-primaryColor">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
               
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                
                  <a
                    href="/signinpage"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  
                  </div>
                  <div className="py-6 px-5 space-y-6">          
                    <div>
                    
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                         Sign In
                      </a>
                   
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>


      <main className="lg:relative">
        <div className="relative  mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left" >
          <div className="absolute inset-0">
            <img src="/images/bg_img.svg" alt="" />

          </div>
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-appgreen sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Learn </span>
              <span className= "text-white"> on your  <br/> class </span>
              <span className="block text-apporange xl:inline"> Language </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
            Learn and improve skills across business,tech ,design and more taught experts to help your workforce whatever comes next.
            </p>

            <div className="sm:flex sm:justify-center lg:justify-start mt-10">
              <div className="flex w-1/2 p-5">  <img  src="images/apple-store-badge.png" /> </div>
              <div className="flex w-1/2"> <img src="images/google-play-badge.png" /></div>
            </div>
            {/* <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md ">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white  md:py-4 md:text-lg md:px-10"
                >
                  <img src="images/apple-store-badge.png" />
                </a>
              </div>
              <div className="mt-3 rounded-md  sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                >
                     <img src="images/google-play-badge.png" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full ">
         <div className="flex h-full w-1/2 absolute items-start md:mt-48 md:pl-11">
          <img
            className="inset-0 object-cover "
            src="/images/grown_girl.png"
            alt=""
          />
        </div>
        </div>
      </main>
    </div>
  )
}


export default HomePage;