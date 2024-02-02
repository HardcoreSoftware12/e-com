import React from 'react'


const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

const address = [
  {
    name:"Joh Doe",
    street:"High street",
    city:"Banglore",
    pinCode:"576224",
    state:"Karnataka",
    phone:"1234565413"
  },
  {
    name:"Will Smith",
    street:"Slap Town",
    city:"Mumbai",
    pinCode:"576224",
    state:"Karnataka",
    phone:"12348888883"
  }
]

function Checkout() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
    <div className='lg:col-span-3 px-4 py-6 bg-white mb-20'>  

     
    <form className='space-y-3'>
        <div className="sm:col-span-3 ">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 ">
              <label htmlFor="landmark" className="block text-sm font-medium leading-6 text-gray-900">
                Landmark
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="landmark"
                  id="landmark"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>Address</h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>Choose from existing address</p>
              <ul role="list" className="divide-y divide-gray-100">
      {address.map((address) => (
        <li key={address.phone} className="flex justify-between gap-x-6 py-5 px-5 border-solid border-gray-200 border-2">
          <div className="flex min-w-0 gap-x-4">
          <input name='address'
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />

            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{address.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.street}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.pinCode}</p>
            </div>
          </div>

          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{address.phone}</p>
            <p className="text-sm leading-6 text-gray-900">{address.pinCode}</p>
            </div>
          
        </li>
      ))}
    </ul>
            </div>

            <div className='mt-10 space-y-10'>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Payment options</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">Choose one option</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="cash"
                    name="payments"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="payments" className="block text-sm font-medium leading-6 text-gray-900">
                    cash
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="credit-card"
                    name="payments"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="payments" className="block text-sm font-medium leading-6 text-gray-900">
                    Credit Card
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="debit-crad"
                    name="payments"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="payments" className="block text-sm font-medium leading-6 text-gray-900">
                   Debit-card
                  </label>
                </div>
              </div>
            </fieldset>
            </div>
    </form>
    
    
   
    </div>
    <div className='lg:col-span-2'>
      
    <div className=" mx-auto bg-white px-2 py-6 sm:px-6">
    
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-10 text-center ">
              Cart
            </h1>
    <div className="flow-root">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product.id} className="flex py-6">
            <div className="h-25 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href={product.href}>{product.name}</a>
                  </h3>
                  <p className="ml-4">{product.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <div className="text-gray-500  inline">
                  <label htmlFor="quantity" className='mr-4'>Qty</label>
                  <select name="" id="" className=''>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="2">3</option>
                    <option value="2">4</option>
                    <option value="2">5</option>
                  </select>
                </div>

                <div className="flex">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>


<div className=" border-gray-200 px-4 py-6 sm:px-6  mx-auto bg-white">
  <div className="flex justify-between text-base font-medium text-gray-900">
    <p>Subtotal</p>
    <p>$262.00</p>
  </div>
  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
  <div className="mt-6">
    <a
      href="#"
      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
    >
      Click to Pay
    </a>
  </div>
  
</div>
    </div>
    </div>
    </div>
    
    

  )
}

export default Checkout