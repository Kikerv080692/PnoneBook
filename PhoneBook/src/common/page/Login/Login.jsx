import { useState } from "react"
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

export const Login = () => {
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const {placeholder, value} = event.target
    switch(placeholder){
        case 'email':
          setEmail(value)
          return
          case 'password':
          setPassword(value)
          return
          default:
          return
    }
  }
  const toggleShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };
  
    return (
      <form>
       <input type="email" value={email} placeholder="email" onChange={handleInputChange}/>
       <input type={isShowPassword ? 'text' : 'password'} value={password} placeholder="password" onChange={handleInputChange}  />
       <button type='button' onClick={toggleShowPassword}>{ isShowPassword ? <IoEye /> : <IoMdEyeOff />}</button>
       <button type='submit'>Login</button>
      </form>
    )
  }