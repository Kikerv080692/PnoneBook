import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import * as SC from "./Register.styled";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleInputChange = (event) => {
    // console.log(event.target.placeholder)
    // console.log(event.target.value)
    const { placeholder, value } = event.target;
    switch (placeholder) {
      case "Name":
        setName(value);
        return;
      case "Email":
        setEmail(value);
        return;
      case "Password":
        setPassword(value);
        return;
      default:
        return;
    }
  };

  const toggleShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };
  return (
    <SC.FormWrapper>
      <SC.CloseIcon />
      <SC.Input
        type="text"
        placeholder='Name'
        value={name}
        onChange={handleInputChange}
      />
      <SC.Label>Name</SC.Label>
      <SC.Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleInputChange}
      />
      <SC.WrapperInputPassword>
        <SC.Input
          type={isShowPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <SC.TogglePassword onClick={toggleShowPassword} type="button">
          {isShowPassword ? <IoEye /> : <IoMdEyeOff />}
        </SC.TogglePassword>
      </SC.WrapperInputPassword>
      <SC.ButtonSubmit type="submit">Register</SC.ButtonSubmit>
    </SC.FormWrapper>
  );
};
