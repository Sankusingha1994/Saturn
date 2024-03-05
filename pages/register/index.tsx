import { signUpMutation } from '@/api/functions/user.api';
import validationText from '@/json/messages/validationText';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';


const schema = yup.object().shape({
    full_name: yup.string().required(validationText.error.full_name),
    email: yup.string().email().required(validationText.error.email),
    password: yup.string().min(6).required(validationText.error.password),
    birth_year: yup.number().required(validationText.error.birth_year),
    birth_month: yup.number().required(validationText.error.birth_month),
    birth_date: yup.number().required(validationText.error.birth_date),
    birth_hour: yup.number().required(validationText.error.birth_hour),
    birth_minute:yup.number().required(validationText.error.birth_minute),
    birth_meridian: yup.string().required(validationText.error.birth_meridian),
    birth_place: yup.string().required(validationText.error.birth_place),
    current_location: yup.string().required(validationText.error.current_location),
    lat: yup.number().required(validationText.error.lat),
    lon: yup.number().required(validationText.error.lon),
    
  });

const Register = () => {
    const {register, handleSubmit,formState
        : { errors } } = useForm({
        resolver: yupResolver(schema),
      })


      const { mutate } = useMutation({
        mutationKey: ["signup"],
        mutationFn: signUpMutation
      });
  const router = useRouter();

      const onSubmit: SubmitHandler<any> = (data) => {
      

      const payload = {
           
        full_name: data?.full_name,
        email: data?.email,
        password: data?.password,
        birth_year: data?.birth_year,
        birth_month: data?.birth_month,
        birth_date: data?.birth_date,
        birth_hour: data?.birth_hour,
        birth_minute: data?.birth_minute,
        birth_meridian:data?.birth_meridian,
        birth_place: data?.birth_place,
        current_location: data?.current_location,
        lat: data?.lat,
        lon: data?. lon,
    };

    mutate(payload, {
        onSuccess: () => {
           
           
            router.push("/login");
        }
    });
      
      };


  return (
    <Box 
    component="form" 
      gap={1} 
      display="flex" 
      flexDirection="column" 
      justifyContent={'space-evenly'} 
      sx={{width:"80%",margin:" 50px auto",paddingTop:"50px"}}
      onSubmit={handleSubmit(onSubmit)}>


<TextField label="Full Name" {...register("full_name")} error={Boolean(errors?.full_name)} helperText=
{errors?.full_name?.message}/>

    

    <TextField label="Enter Email" {...register("email")} error={Boolean(errors?.email)} helperText=
{errors?.email?.message}/>

<TextField label="Enter Password" {...register("password")} error={Boolean(errors?.password)} helperText=
{errors?.password?.message}/>

<TextField label="Enter Birth Year" {...register("birth_year")} error={Boolean(errors?.birth_year)} helperText=
{errors?.birth_year?.message}/>

<TextField label="Enter Birth Month" {...register("birth_month")} error={Boolean(errors?.birth_month)} helperText=
{errors?.birth_month?.message}/>

<TextField label="Enter Birth Date" {...register("birth_date")} error={Boolean(errors?.birth_date)} helperText=
{errors?.birth_date?.message}/>

<TextField label="Enter Birth Hour" {...register("birth_hour")} error={Boolean(errors?.birth_hour)} helperText=
{errors?.birth_hour?.message}/>

<TextField label="Enter Birth Minute" {...register("birth_minute")} error={Boolean(errors?.birth_minute)} helperText=
{errors?.birth_minute?.message}/>

<TextField label="Enter Birth Meridian" {...register("birth_meridian")} error={Boolean(errors?.birth_meridian)} helperText={errors?.birth_meridian?.message}/>

<TextField label="Enter Birth Place" {...register("birth_place")} error={Boolean(errors?.birth_place)} helperText=
{errors?.birth_place?.message}/>

<TextField label="Enter Current Location" {...register("current_location")} error={Boolean(errors?.current_location)} helperText={errors?.current_location?.message}/>

<TextField label="Enter Lat" {...register("lat")} error={Boolean(errors?.lat)} helperText=
{errors?.lat?.message}/>

<TextField label="Enter Lon" {...register("lon")} error={Boolean(errors?.lon)} helperText=
{errors?.lon?.message}/>

    <Button type="submit">Signup</Button>
  </Box>
  )
}

export default Register
