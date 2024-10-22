import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { MdDirectionsCarFilled } from "react-icons/md";
import { GiDoorHandle } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { FaUnlockAlt } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { GoPasskeyFill } from "react-icons/go";
import { FaBuildingLock } from "react-icons/fa6";

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';

const products = [
  { 
    name: 'Automotive Key Cutting', 
    description: 'Expert automotive key cutting services, including high-security keys and transponder keys.', 
    href: '/services', 
    icon: IoCarSportSharp
  },
  { 
    name: 'Emergency Unlocking', 
    description: 'Quick response for emergency lockouts, getting you back into your home or car fast.', 
    href: '/services', 
    icon: FaUnlockAlt
  },
  { 
    name: 'Door Lock Repair', 
    description: 'Professional door lock repair services to fix or replace damaged locks in your home or office.', 
    href: '/services', 
    icon: GiDoorHandle
  },
  { 
    name: 'Vehicle Lockout Assistance', 
    description: 'Fast vehicle lockout assistance to get you back on the road in no time.', 
    href: '/services', 
    icon: MdDirectionsCarFilled
  },
  { 
    name: 'Re-Keying', 
    description: 'Affordable re-keying services to ensure your locks are secure with new keys.', 
    href: '/services', 
    icon: IoKeySharp
  },
  { 
    name: 'Key Duplication', 
    description: 'Precise key duplication services for home, office, and vehicle locks.', 
    href: '/services', 
    icon: GoPasskeyFill
  },
  { 
    name: 'Building Lockout Assistance', 
    description: 'Reliable lockout assistance for commercial buildings and residential properties.', 
    href: '/services', 
    icon: FaBuildingLock
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/home" className="text-sm font-semibold leading-6 text-gray-900">
            24/7 Locksmith Services	
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Services
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <Link 
                      to={item.href}
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <span className="block font-semibold text-gray-900">
                          {item.name}
                        </span>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          
          <Link to="/reviews" className="text-sm font-semibold leading-6 text-gray-900">
            Reviews
          </Link>

          <Link to="/location" className="text-sm font-semibold leading-6 text-gray-900">
            Location
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/contact-us" className="text-sm font-semibold leading-6 text-gray-900">
            Contact Us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/home" className="-m-1.5 p-1.5">
              24/7 Locksmith Services
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Facility
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <Link 
                            to={item.href}
                            key={item.name}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link to="/features" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Features
                </Link>
                
                <hr/>

                <Link to="/contact-us" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  (747) 287-8400
                </Link>

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}