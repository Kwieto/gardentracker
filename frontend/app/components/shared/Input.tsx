import React from "react";
import clsx from "clsx";

type InputProps = {
  type?: "text" | "date",
  labelText: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const Input: React.FC<InputProps & { className?: string }> =
  ({type = "text", labelText, value, onChange, className}) => {
    const inputClasses = "block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
    const labelClasses = "absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto";
    const id = React.useId();
    return (
      <div className="relative z-0 mb-6">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className={clsx(inputClasses, className)}
          placeholder=" "
        />
        <label htmlFor={id} className={labelClasses}>{labelText}</label>
      </div>
    );
  };

export default Input;
