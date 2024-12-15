import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useLoginUserMutation, useRegisterUserMutation } from "@/features/api/authApi"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

const Login =() => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registerUser,{data:registerData,error:registerError,isLoading:registerLoading,isSuccess:registerSuccess}] = useRegisterUserMutation();
  const [loginUser,{data:loginData,error:loginError,isLoading:loginLoading,isSuccess:loginSuccess}] = useLoginUserMutation();

  const InputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInfo({ ...signupInfo, [name]: value });
    } else {
      setLoginInfo({ ...loginInfo, [name]: value });
    }
  };
  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInfo : loginInfo;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if(registerSuccess && registerData){
      toast.success(registerData.message || "Registration Successful");
    }
    if (registerError) {
      toast.error(registerData?.data?.message || "Registration Failed");
    }
    if(loginSuccess && loginData){
      toast.success(loginData.message || "Login Successful");
    }
    if (loginError) {
      toast.error(loginData?.data?.message || "Login Failed");
    }
    
  }, [loginSuccess,registerSuccess,loginError,registerError,registerData,loginData])
  

  return (
    <div className="flex justify-center items-center w-full mt-20">
      <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">SignUp</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>SignUp</CardTitle>
            <CardDescription>
              Sign up for a new account. After signing up, you will be logged in.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input name="name" value={signupInfo.name} type="text" required={true} onChange={(e)=> InputHandler(e,"signup")}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Email</Label>
              <Input type="email" required={true} onChange={(e)=> InputHandler(e,"signup")} name="email" value={signupInfo.email}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input type="password" required={true} onChange={(e)=> InputHandler(e,"signup")} name="password" value={signupInfo.password}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={registerLoading} onClick={()=>handleRegistration("signup")}>
              {
                registerLoading?<>
                  <Loader2 className="animate-spin w-5 h-5 mr-2"/> Please Wait
                </>:"SignUp"
              }
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login to your account using your email and password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input type="email" required={true} onChange={(e)=> InputHandler(e,"login")} name="email" value={loginInfo.email}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input type="password" required={true} onChange={(e)=> InputHandler(e,"login")} name="password" value={loginInfo.password}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={loginLoading} onClick={()=>handleRegistration("login")}>
              {
                loginLoading?<>
                  <Loader2 className="animate-spin w-5 h-5 mr-2"/> Please Wait
                </>:"Login"
              }
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default Login
