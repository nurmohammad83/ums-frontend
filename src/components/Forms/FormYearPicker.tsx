'use client'
import { DatePicker, DatePickerProps, Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import dayjs,{Dayjs} from 'dayjs';


interface YearPickerProps {
  name: string;
  label?: string;
  picker:"year" | "time" 
}

const FormYearPicker = ({
  name,
  label,
  picker
}: YearPickerProps) => {
  const { control,setValue } = useFormContext();


  return (
    <div >
    {label ? label : null}
    <br />
    <Controller
      control={control}
      name={name}
      
      render={({ field }) => (
        <DatePicker 
        size="large"
        style={{width:'100%'}}
        defaultValue={field.value}
        value={field.value ? dayjs().year(field.value): null} 
        picker={picker}
        onChange={(_, dateString)=>{
            field.onChange(dateString)
        }} />
      )}
    />
    </div>
  );
};

export default FormYearPicker;
