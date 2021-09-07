import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <section className="sticky z-10 drop-shadow-lg">
      <Popover className="relative bg-white">
        <div className="container px-4 mx-auto sm:px-6">
          <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Newspaper.io</span>
                <h4 className="text-2xl font-bold text-red-800">
                  Newspaper.io
                </h4>
              </Link>
            </div>
            {/* responsive mobile menu */}
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-400">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex ">
              <div className="items-center space-x-10 md:flex md:justify-end ">
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-900"
                >
                  Latest Articles
                </Link>
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-900"
                >
                  Blogs
                </Link>
                <Link
                  to="/admin/dashboard"
                  className="text-base text-gray-900 hover:text-gray-900"
                >
                  Admin
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-900 whitespace-nowrap hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-4 py-2 ml-4 text-base font-medium bg-red-500 border border-transparent rounded-md shadow-sm whitespace-nowrap text-red-50 hover:bg-red-600"
                >
                  Sign up
                </Link>
              </div>
            </Popover.Group>
          </div>
        </div>

        <Transition
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
            className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
          >
            <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4>Newspaper.io</h4>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-400">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="px-5 py-6 space-y-6">
                <div className="grid grid-cols-1 gap-y-4">
                  <Link
                    href="#"
                    className="text-base text-gray-900 hover:text-gray-700"
                  >
                    Courses
                  </Link>

                  <Link
                    to="/"
                    className="text-base text-gray-900 hover:text-gray-700"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/"
                    className="text-base text-gray-900 hover:text-gray-700"
                  >
                    About Us
                  </Link>
                </div>
                <div>
                  <Link
                    to="/"
                    className="flex items-center justify-center w-full px-4 py-2 font-medium text-gray-200 bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-600"
                  >
                    Sign up
                  </Link>
                  <p className="mt-6 font-medium text-center text-gray-900">
                    Existing customer?{" "}
                    <Link to="/" className=" hover:text-gray-800">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </section>
  );
};

export default Navbar;
