import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./components/CustomInput";
import { schema, type FormValues } from "./models/form.models";

const CustomForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    //mode: "onBlur"  //es para que apenas salga el focus ya haga la validacion en lugar en en el submit
    defaultValues: {
      email: "agarrame@goog.com"
    }
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center space-x-4'>
      <InputForm name="name" control={control} label="Name" type="text" error={errors.name} />
      <InputForm name="email" control={control} label="Email" type="email" error={errors.email} />
      <InputForm name="password" control={control} label="Password" type="password" error={errors.password} />
      <InputForm name="confirmPassword" control={control} label="Confirm Password" type="password" error={errors.confirmPassword} />
      <button className='bg-amber-700 text-white rounded-md w-32' type="submit" > Submit</button>
      <br/><br/>
    </form>
  )
}

export default CustomForm;