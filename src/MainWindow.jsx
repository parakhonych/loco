import menuData from './data/data.json';

import React, { useState } from 'react';

export default function MainWindow() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedMode, setSelectedMode] = useState('btn11');
  const [selectedModeSub, setSelectedModeSub] = useState('option1');
  const [results, setResults] = useState([]);
  const btn1 = menuData.menuMain[0];
  const btn2 = menuData.menuMain[1];
  const btn3 = menuData.menuMain[2];
  const Button11 = menuData.subButtons['Button1'][0];
  const Button12 = menuData.subButtons['Button1'][1];
  const Button21 = menuData.subButtons['Button2'][0];
  const Button22 = menuData.subButtons['Button2'][1];
  const Button31 = menuData.subButtons['Button3'][0];
  const Button32 = menuData.subButtons['Button3'][1];

  const [input, setInput] = useState('');

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  const handleNumberClick = (num) => {
    setInput((prev) => prev + num);
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInput('');
  };

  const handleOk = () => {
    console.log('Entered value:', input);
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
        <section className="bg-white-300 w-[45%] h-full flex justify-center items-center">
          <section className="bg-white-300 w-full h-full flex flex-col p-4">
            {/* Top sub-section (40%) to display input */}
            <div className="flex flex-col h-[40%] w-full p-4 gap-4">
              {/* Mode display */}
              <div className="w-full h-[15%] flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                <span className="text-lg font-semibold">Mode:</span>
                <span className="text-lg font-bold">{selectedMode}</span>
              </div>
              {/* Sub-mode radio buttons */}
              <div className="h-[60%] flex flex-col gap-2">
                <label className="flex-1 flex items-center space-x-2 text-xl bg-gray-200 p-3 rounded-lg cursor-pointer hover:bg-gray-300">
                  <input
                    type="radio"
                    name="submode"
                    value="option1"
                    checked={selectedModeSub === 'option1'}
                    onChange={() => setSelectedModeSub('option1')}
                    className="w-6 h-6"
                  />
                  <span>Option 1</span>
                </label>

                <label className="flex-1 flex items-center space-x-2 text-xl bg-gray-200 p-3 rounded-lg cursor-pointer hover:bg-gray-300">
                  <input
                    type="radio"
                    name="submode"
                    value="option2"
                    checked={selectedModeSub === 'option2'}
                    onChange={() => setSelectedModeSub('option2')}
                    className="w-6 h-6"
                  />
                  <span>Option 2</span>
                </label>
              </div>
              {/* Display input from keypad - 20% */}
              <div className="h-[20%] mt-2 text-2xl font-mono flex items-center justify-center">
                Length: {input.padStart(4, '0')} mm
              </div>
            </div>

            {/* Bottom sub-section (60%) keypad */}
            <div className="flex flex-col h-[60%] w-full gap-2">
              {/* Row 1: Numbers 1-3 + Backspace */}
              <div className="grid grid-cols-4 gap-2 h-1/4">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    className="bg-gray-300 hover:bg-gray-500 rounded-lg text-xl font-semibold h-full w-full text-4xl"
                    onClick={() => handleNumberClick(num.toString())}
                  >
                    {num}
                  </button>
                ))}
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 rounded-lg text-xl font-bold h-full w-full text-4xl"
                  onClick={handleBackspace}
                >
                  ←
                </button>
              </div>

              {/* Row 2: Numbers 4-6 */}
              <div className="grid grid-cols-4 gap-2 h-1/4">
                {[4, 5, 6].map((num) => (
                  <button
                    key={num}
                    className="bg-gray-300 hover:bg-gray-500 rounded-lg text-xl font-semibold h-full w-full text-4xl"
                    onClick={() => handleNumberClick(num.toString())}
                  >
                    {num}
                  </button>
                ))}
                <button
                  className="bg-red-400 hover:bg-red-500 rounded-lg text-xl font-bold h-full w-full text-4xl"
                  onClick={handleClear}
                >
                  CLEAR
                </button>
              </div>

              {/* Row 3: Numbers 7-9 */}
              <div className="grid grid-cols-4 gap-2 h-1/4">
                {[7, 8, 9].map((num) => (
                  <button
                    key={num}
                    className="bg-gray-300 hover:bg-gray-500 rounded-lg text-xl font-semibold h-full w-full text-4xl"
                    onClick={() => handleNumberClick(num.toString())}
                  >
                    {num}
                  </button>
                ))}
                <button
                  className="bg-green-400 hover:bg-green-500 rounded-lg text-xl font-bold h-full w-full text-4xl"
                  onClick={handleOk}
                >
                  OK
                </button>
              </div>

              {/* Row 4:0*/}

              <div className="grid grid-cols-4 gap-2 h-1/4">
                <div className></div>
                <button
                  className="bg-gray-300 hover:bg-gray-500 rounded-lg text-xl font-semibold h-full w-full text-4xl"
                  onClick={() => handleNumberClick('0')}
                >
                  0
                </button>
              </div>
            </div>
          </section>
        </section>
        <section className="bg-gray-100 w-[30%] h-full flex justify-center items-center">
          <div className="bg-gray-100 w-full h-full p-2 rounded-lg border border-gray-300 overflow-y-auto">
            {results.length === 0 ? (
              <p className="text-gray-400 text-xl item-right">No results yet</p>
            ) : (
              results.map((res, index) => (
                <div key={index} className="text-xl font-mono text-center py-1">
                  {res} mm
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
