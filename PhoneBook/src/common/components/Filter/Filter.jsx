import {useSearchParams} from 'react-router-dom'

export const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchContact = searchParams.get('contact') ?? ''

    const handleInputChange = (e) => {
        const {value} = e.target
        setSearchParams({
            contact: value
        })
    }
  return (
    <div>
      <input type="text" value={searchContact} onChange={handleInputChange}/>
    </div>
  )
}


