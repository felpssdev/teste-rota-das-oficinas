import { useState } from "react";

function FirstTask() {
  const [input, setInput] = useState('');
  const [convertedNum, setConvertedNum] = useState('');

  const convertToRoman = (num) => {
    const romanNumbers = {
      i: 1,
      v: 5,
      x: 10,
      l: 50,
      c: 100,
      d: 500,
      m: 1000,
    }

    num = num.toLowerCase();

    let result = 0;

    for (let i = 0; i < num.length; i += 1) {
      const currentNum = romanNumbers[num[i]]
      const nextNum = romanNumbers[num[i + 1]]

      if (nextNum && currentNum < nextNum) {
        result += nextNum - currentNum;
        i++;
      } else {
        result += currentNum;
      }
    }

    return result;
  };

  const converToArabic = (num) => {
    const arabicNums = [
      {roman: 'm', arabic: 1000},
      {roman: 'cm', arabic: 900},
      {roman: 'd', arabic: 500},
      {roman: 'cd', arabic: 400},
      {roman: 'c', arabic: 100},
      {roman: 'xc', arabic: 90},
      {roman: 'l', arabic: 50},
      {roman: 'xl', arabic: 40},
      {roman: 'x', arabic: 10},
      {roman: 'ix', arabic: 9},
      {roman: 'v', arabic: 5},
      {roman: 'iv', arabic: 4},
      {roman: 'i', arabic: 1},
    ];

    num = Number(num);

    let result = '';

    arabicNums.forEach(({ roman, arabic }) => {
      while (Number(num) >= arabic) {
        result += roman;
        num -= arabic;
      }
    })

    return result.toUpperCase();
  };

  const handleChange = ({ target: { value }}) => {
    setInput(value);
  };

  const handleClick = () => {
    const converted = isNaN(Number(input)) ? convertToRoman(input) : converToArabic(input);
    setConvertedNum(converted)
  };

  const validateInput = () => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;

    if (input.length <= 0) {
      return true;
    }

    return regex.test(input);
  }

  return (
    <div
      className="border-4 p-4 text-white rounded-xl h-64 w-80 flex-col text-center bg-slate-800"
    >
      <h2
        className=" font-bold text-sm"
      >
        CONVERSOR DE NÚMEROS ROMANOS
      </h2>
      <fieldset 
        className="text-base mb-3 mt-4 border-2 p-2 m-3 rounded-xl bg-slate-100/20"
      >
        Digite o número:
        <label
          htmlFor="input-number"
          className="text-base font-bold mb-3"
        >
          <input
            className="border border-gray-500 rounded w-24 py-2 px-3 ml-2 text-gray-700 text-base"
            onChange={ handleChange }
            name="input-number"
            value={ input }
            type="text"
            id="input-number"
          />
        </label>
      </fieldset>
      <button
        disabled={ validateInput() }
        className=" bg-green-600 p-2 rounded-xl font-semibold disabled:bg-red-500"
        type="button"
        onClick={ handleClick }
      >
        CONVERTER!
      </button>
      <p
        className="mt-4 bg-slate-100/20 w-full h-8 m-auto p-1 rounded-xl"  
      >{ convertedNum }</p>
    </div>
  )
}

export default FirstTask;
