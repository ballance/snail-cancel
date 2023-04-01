import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string,
  lastName: string,
};

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log('submitted: ' + data.firstName + ' ' + data.lastName);

//   console.log(watch("firstName"))
//   console.log(watch("lastName")) 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input title="First Name" {...register("firstName", {required: true })} />*
            {errors.firstName && <span>First Name is required</span>}
        </div>
        <div>
            <input title="Last Name" {...register("lastName", { required: true })} />*
            {errors.lastName && <span>Last Name is required</span>}
        </div>
        <div>
            <input type="submit" />
        </div>
    </form>
  );
}