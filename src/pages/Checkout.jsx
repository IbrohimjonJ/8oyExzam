// src/components/Checkout.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../app/userslice';
import { FcFullTrash } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { userP } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user);
  const dispatch =useDispatch()

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Checkout
            </h1>
          </div>
        </div>

        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Shopping</h2>
            <div className="mt-4 bg-white shadow sm:rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Products</h3>
                <ul className="divide-y divide-gray-200">
                  {userP?.products?.map((product, index) => (
                    <li key={index} className="py-4 flex">
                      <img
                        className="h-20 w-20 rounded-md object-cover"
                        src={product.images[0]}
                        alt="img"
                      />
                      <div className="ml-4 flex-1 flex flex-col justify-between">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className=''>{product.title}</h3>
                                                    <p className="ml-4 ">${product.price}</p>
                        </div>
                        <p className='text-blue-600'>{product.amount}X</p>
                        <p className="mt-1 text-sm text-gray-500">{user.email}</p>
                      </div>
                          <button
                          onClick={() => dispatch(removeProduct(product.id))}
                          className="btn btn-ghost btn-xs h-12"
                        >
                          <FcFullTrash className="h-6 w-8" />
                        </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{userP.price}</p>
                  </div>
                  <div className="mt-2 flex justify-between text-base font-medium text-gray-900">
                    <p>Shipping</p>
                    <p>$10.00</p>
                  </div>
                                   <div className="mt-4 flex justify-between text-base font-bold text-gray-900">
                    <p>Total</p>
                    <p>${userP.price}</p>
                                      </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">User Information</h2>
            <div className="mt-4 bg-white shadow sm:rounded-lg">
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="street-address"
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      autoComplete="address-level1"
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="zip"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ZIP / Postal code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      id="zip"
                      autoComplete="postal-code"
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
                <Link to={"/"}>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700"
                >
                Place to Home
              </button>
                  </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
