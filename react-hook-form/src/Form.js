import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver } from "@hookform/resolvers/yup"
export const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("Full Name is required"),
        email: yup.string().email().required(),
        age: yup.number().integer().positive().min(18).required().typeError('age must be a number'),
        password: yup.string().min(4).max(20).required(),
        confirmPassword : yup.string().oneOf([yup.ref("password"),null],"Paaswords do not match").required()
    })
    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const submit = (data) => {
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="Full Name" {...register("fullName")}/>
            {errors.fullName?.message && <p>{errors.fullName?.message}</p>}
            <input type="text" placeholder="Email" {...register("email")}/>
            {errors.email?.message && <p>{errors.email?.message}</p>}
            <input type="number" placeholder="Age" {...register("age")}/>
            {errors.age?.message && <p>{errors.age?.message}</p>}
            <input type="password" placeholder="Password" {...register("password")}/>
            {errors.password?.message && <p>{errors.password?.message}</p>}
            <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
            {errors.confirmPassword?.message && <p>{errors.confirmPassword?.message}</p>}
            <input type="submit"/>
        </form>
    )
}