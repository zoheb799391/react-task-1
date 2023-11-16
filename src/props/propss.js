import React , {useContext} from 'react'
import Proper from './props'
import { DetailContext } from '../Context'

const Propss = () => {
  const theme = useContext(DetailContext)
  console.log(theme, 'this is data hey');
  return (
    <>
    <Proper  name  = 'zohaib' age = '22' email = 'z@gmail.com'/>


    
    </>
  )
}

export default Propss
