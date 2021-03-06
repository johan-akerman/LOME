import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef } from "react";

export function MobileMenu() {
  const buttonRef = useRef();
  return (
    <div className="px-4">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              c
              ref={buttonRef}
              className="lg:hidden block group rounded-md items-center text-lg font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <FontAwesomeIcon
                className="text-4xl text-black"
                icon={open ? faTimes : faBars}
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="lg:hidden block absolute top-16 z-10 w-64  mt-2 transform -translate-x-56  sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-2xl">
                  <div className="relative bg-white p-3">
                    <a
                      onClick={() => buttonRef.current?.click()}
                      href="#om-lome"
                      className="flex items-center text-left p-2 mx-1 my-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 text-lg font-semibold text-gray-900"
                    >
                      Om LOME
                    </a>

                    <a
                      onClick={() => buttonRef.current?.click()}
                      href="#om-kofisar"
                      className="flex items-center text-left p-2 mx-1 my-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 text-lg font-semibold text-gray-900"
                    >
                      Kor & klimat
                    </a>

                    <a
                      className="flex items-center text-left p-2 mx-1 my-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 text-lg font-semibold text-gray-900"
                      href="https://drive.google.com/drive/folders/1umsgkPGCJQu3xeyBqXgr9-JSOUSOUh5o?usp=sharing"
                      target="_blank"
                    >
                      Klimatrapport
                    </a>

                    <a
                      onClick={() => buttonRef.current?.click()}
                      href="#impact-kalkylatorn"
                      className="flex items-center text-left p-2 mx-1 my-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 text-lg font-semibold text-gray-900"
                    >
                      Impactkalkylatorn
                    </a>

                    <a
                      onClick={() => buttonRef.current?.click()}
                      href="#faq"
                      className="flex items-center text-left p-2 mx-1 my-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 text-lg font-semibold text-gray-900"
                    >
                      FAQ
                    </a>

                    <Link
                      onClick={() => buttonRef.current?.click()}
                      to="/butiker"
                      className="flex items-center text-left p-2 mx-1 my-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 text-lg font-semibold text-gray-900"
                    >
                      Hitta butiker
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
