import { loginMutation } from '@/api/functions/user.api';
import validationText from '@/json/messages/validationText';
import Wrapper from "@/layout/wrapper/Wrapper";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Paper, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';



const schema = yup.object({
    email:yup.string().required(validationText.error.email),
    password:yup.string().required(validationText.error.password)
}).required()

const Login = () => {
  const {register, handleSubmit,formState
    : { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  
  const { mutate } = useMutation({
    mutationKey: ["signup"],
    mutationFn: loginMutation
  });

  const router = useRouter()
      const onSubmit: SubmitHandler<any>= async (data)=>{
        const payload = {
       
          email: data?.email,
         
          password: data?.password
      };
      mutate(payload, {
        onSuccess: () => {
           
           
            router.push("/");
        }
    });  
    console.log(data);
    
          
        }  
    
  return (
    <Wrapper>
    <Box >
        <Typography variant='h3'textAlign="center" sx={{color:"orange"}}>
            <b>Plase Login !!</b>
        </Typography>

        <Paper sx={{width:"50%",height:"400px",margin:" 50px auto",background:""}}>

        <Box component="form" gap={1} display="flex" flexDirection="column" justifyContent={'space-evenly'} sx={{width:"80%",margin:" 50px auto",paddingTop:"80px"}} onSubmit={handleSubmit(onSubmit)}>
        
        <TextField label="Email" {...register("email")} error={Boolean(errors?.email)} helperText={errors?.email?.message}/>

        <TextField type="password" label="Password" {...register("password")} error={Boolean(errors?.password)} helperText={errors?.password?.message}/>
        <Button type="submit" variant='contained'>Submit</Button>
        </Box>
        </Paper>
    </Box>
    </Wrapper>
  )
}

export default Login
