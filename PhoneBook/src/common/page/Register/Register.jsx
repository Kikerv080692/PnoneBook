import { useState } from "react"

export const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleInputChange = (event) => {
    console.log(event.target.placeholder)
    console.log(event.target.value)
    const {placeholder, value} = event.target
    switch (placeholder){
      case 'name': 
      setName(value)
      return
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

    return (
     
        <form>
          <input type="text" placeholder="name" value={name} onChange={handleInputChange}/>
          <input type="text" placeholder="email" value={email} onChange={handleInputChange}/>
          <input type="text"  placeholder="password" value={password} onChange={handleInputChange} />
          <button type='button'>Show</button>
          <button type="submit">Register</button>
        </form>
     
    )
  }