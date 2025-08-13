import menuData from './data/data.json';

import React, { useState } from 'react';

export default function MainWindow() {
  const [activeMenu, setActiveMenu] = useState(null);
  const btn1 = menuData.menuMain[0];
  const btn2 = menuData.menuMain[1];
  const btn3 = menuData.menuMain[2];
  const Button11 = menuData.subButtons['Button1'][0];
  const Button12 = menuData.subButtons['Button1'][1];
  const Button21 = menuData.subButtons['Button2'][0];
  const Button22 = menuData.subButtons['Button2'][1];
  const Button31 = menuData.subButtons['Button3'][0];
  const Button32 = menuData.subButtons['Button3'][1];

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-r  from-green-500 to-blue-600  flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-[80%] h-[90vh] rounded-lg shadow-lg flex justify-center items-center">
        <section className="bg-gray-700 w-[25%] h-full flex flex-col justify-start items-center pt-10 space-y-4">
          {/* Main button btn1 */}

          <button
            className="bg-gray-200 hover:bg-gray-500 text-black py-3 h-16 w-4/5 rounded"
            onClick={() => toggleMenu(btn1)}
          >
            {btn1}
          </button>

          <div
            className={`flex flex-col gap-2 w-[75%] mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
              activeMenu === btn1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <button className="bg-gray-200 hover:bg-gray-500 text-black h-12 w-full rounded">
              {Button11}
            </button>
            <button className="bg-gray-200 hover:bg-gray-500 text-black h-12 w-full rounded">
              {Button12}
            </button>
          </div>

          {/* Main button btn2 */}
          <button
            className="bg-gray-200 hover:bg-gray-500 text-black py-3 h-16 w-4/5 rounded"
            onClick={() => toggleMenu(btn2)}
          >
            {btn2}
          </button>

          {/* Sub-buttons for btn2 with animation */}
          <div
            className={`flex flex-col gap-2 w-[75%] mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
              activeMenu === btn2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <button className="bg-gray-200 hover:bg-gray-500 text-black h-12 w-full rounded">
              {Button21}
            </button>
            <button className="bg-gray-200 hover:bg-gray-500 text-black h-12 w-full rounded">
              {Button22}
            </button>
          </div>

          {/* Main button btn3 */}
          <button
            className="bg-gray-200 hover:bg-gray-500 text-black py-3 h-16 w-4/5 rounded"
            onClick={() => toggleMenu(btn3)}
          >
            {btn3}
          </button>

          {/* Sub-buttons for btn3 with animation */}
          <div
            className={`flex flex-col gap-2 w-[75%] mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
              activeMenu === btn3 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <button className="bg-gray-200 hover:bg-gray-500 text-black h-12 w-full rounded">
              {Button31}
            </button>
            <button className="bg-gray-200 hover:bg-gray-500 text-black h-12 w-full rounded">
              {Button32}
            </button>
          </div>
        </section>
        <section className="bg-blue-300 w-[45%] h-full flex justify-center items-center">
          <p>Section 2 (40%)</p>
        </section>
        <section className="bg-yellow-300 w-[30%] h-full flex justify-center items-center">
          <p>Section 3 (40%)</p>
        </section>
      </div>
    </div>
  );
}
