'use client'

import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type SelectOptions ={
  label:string;
  value:string;
}
type SelectFieldOption ={
  options:SelectOptions[]
  name: string;
  size?: "large" | "small" | "middle";
  value?: string;
  label?: string;
  placeholder?:string;
  defaultValue?:SelectOptions
}

const FormSelectFiled = ({
  name,
  options,
  size,
  placeholder,
  value,
  label,
  defaultValue
}: SelectFieldOption) => {
  const { control } = useFormContext();
  return (
    <>
    {label ? label : null}
    <Controller
      control={control}
      name={name}
      render={({ field:{value,onChange} }) => (
        <Select
      style={{ width: '100%' }}
      onChange={onChange}
      size={size}
      options={options}
      value={value}
      placeholder={placeholder}
    />
      )}
    />
    </>
  );
};

export default FormSelectFiled;
