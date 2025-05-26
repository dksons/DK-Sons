import { useContext, useEffect, useState } from 'react';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { login } from '@/services/operations/authApi';
import { AllBlogContext } from '@/context/contextapi';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {register,handleSubmit,reset,formState:{isSubmitSuccessful}}=useForm()
   const [loading, setloading] = useState(false)
   const {userdata,setuserdata}=useContext(AllBlogContext)
const navigate=useNavigate()
 
  useEffect(()=>{
    if(userdata.isLoggedin){
   navigate('/Blogs')
    }
   },[userdata.isLoggedin])


  const formSubmit=async(data)=>{
   const {username,password}=data;
   console.log(data);
   
   
   if(username==(''||undefined||null)||password==(''||undefined||null)) return toast.error("all fields are required")
       setloading(true);
        try {
          const logdata=  await login(username,password);
          console.log(logdata);
          const username1=logdata.user.username
          setuserdata({username1,isLoggedin:true})
            console.log('Form data submitted:');
            navigate('/Blogs')
             toast.success('Welcome Admin')
        } catch (error) {
            console.error("Error in contactUsForm:", error);
        }
      
        setloading(false);
  }
    useEffect(() => {
        if (isSubmitSuccessful) {
            if (loading === false) {
                reset({
                   username: "",
                    password: "",
                });
            }
        }
    }, [reset, isSubmitSuccessful, loading]);

  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen items-center bg-white/30 justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your credentials to access your account
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(formSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  {...register('username',{required:true})}
                  autoComplete='off'
                  className=" rounded-lg relative bg-black/10 block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  {...register('password',{required:true})}
                  autoComplete="current-password"
                  className="appearance-none rounded-lg bg-black/10 relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-300 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-gray-400 p-1 cursor-pointer hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
          
            </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
