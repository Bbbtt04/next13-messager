"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors,
  disabled?: boolean,
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  required = false,
  register,
  errors,
  disabled = false,
}) => {
  return (
    <div className="mt-2">
      <label
        htmlFor={id}
        className="
          block
          text-sm
          font-bold
          leading-6
          text-gray-900
        "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          key={id}
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(`
            form-input
            w-full
            rounded-md
            border-0
            py-1.5
            text-gray-900
            shadow-sm
            ring-1
            ring-inset
            ring-gray-200
            placeholder:text-gary-500
            focus:ring-2
            focus:ring-inset`,
            errors[id] && 'focus:ring-rose-400',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        />
      </div>
    </div>
  )
};
export default Input;
