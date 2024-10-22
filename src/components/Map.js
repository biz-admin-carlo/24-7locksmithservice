import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const destinationAddress = "Pasadena, CA";

const openGoogleDirections = () => {
  const destination = encodeURIComponent(destinationAddress);
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  window.open(googleMapsUrl, '_blank');
};



const subCategories = [
    { name: 'Apple Maps', url: 'https://maps.apple.com/?address=Pasadena,%20CA,%20United%20States&auid=4043081673082814029&ll=34.147643,-118.142959&lsp=6489&q=Pasadena' },
    { name: 'Bing Maps', url: 'https://www.bing.com/maps?osid=6dac157b-b623-4019-85f9-f352795c3454&cp=34.18447~-118.181643&lvl=12.801514&pi=0&imgid=e09672b0-847d-4455-8f13-d0d8b21d670f&v=2&sV=2&form=S00027' },
    { name: 'Google Earth', url: 'https://earth.google.com/web/search/Pasadena,+CA,+USA/@34.18406365,-118.13175211,371.58385062a,30768.07602583d,35y,0h,0t,0r/data=Cn8aURJLCiQweDgwYzJjMmRjMzgzMzBiNTE6MHg1MmI0MTE2MWFkMThmNGEZ2yuYneoSQUAh95DwvT-JXcAqEVBhc2FkZW5hLCBDQSwgVVNBGAIgASImCiQJPl0K-_MRQUARsgv3ikkRQUAZGSxmOL2HXcAh1-0imEuIXcBCAggBOgMKATBKDQj___________8BEAA' },
    { name: 'Google Maps', url: 'https://www.google.com/maps/place/Pasadena,+CA,+USA/@34.1844012,-118.4271385,11z/data=!3m1!4b1!4m6!3m5!1s0x80c2c2dc38330b51:0x52b41161ad18f4a!8m2!3d34.1477849!4d-118.1445155!16zL20vMG16d3c?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D' },
  ];

export default function Maps() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white" data-aos="fade-up">
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <form className="mt-4 border-t border-gray-200">
                <ul className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.url} className="block px-2 py-3 text-left w-full" target="_blank" rel="noopener noreferrer">{category.name}</a>
                    </li>
                  ))}
                  <li>
                    <button onClick={openGoogleDirections} className="block px-2 py-3 text-left w-full">Google Directions</button>
                  </li>
                </ul>
              </form>

            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 pb-6 pt-24 border-b border-gray-200">Our Location</h1>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <form className="hidden lg:block">
              <ul className="px-2 py-3 font-medium text-gray-900">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <a href={category.url} className="block px-2 py-3 text-left w-full" target="_blank" rel="noopener noreferrer">{category.name}</a>
                  </li>
                ))}
                <li>
                  <button onClick={openGoogleDirections} className="block px-2 py-3 text-left w-full">Google Directions</button>
                </li>
              </ul>
            </form>

            <div className="lg:col-span-3">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105616.32023985132!2d-118.21421017324805!3d34.1844433596465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c2dc38330b51%3A0x52b41161ad18f4a!2sPasadena%2C%20CA%2C%20USA!5e0!3m2!1sen!2sph!4v1729587816713!5m2!1sen!2sph"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="map"
                ></iframe>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
