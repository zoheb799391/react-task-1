import React from 'react'
import usecontext from './usecontext'
 import img from '../assets/360_F_475012363_aNqXx8CrsoTfJP5KCf1rERd6G50K0hXw.jpg'


const Context = (props) => {

    const state = {
  "picture" :img,
  "content":"there is no data here !!"

     }
  return (
    <usecontext.Provider value ={state}>
        
        {props.children}
        </usecontext.Provider>
  )
}

export default Context