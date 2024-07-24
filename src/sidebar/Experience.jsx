import React, { Component } from 'react';
import InputField from '../components/InputField';

const Experience = ({handleChange, handleClick}) =>{
    return(
        <div className=''>
            <h4 className='text-lg  mb-2' style={{ fontSize:"19px", fontWeight:"bold"}}>Experience</h4>   
     <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
            <span className='checmark'></span> All
        </label>
        
        <InputField handleChange={handleChange} value="1 year" title="1 year" name="test"/>
        <InputField handleChange={handleChange} value="2 years" title="2 years" name="test"/>
        <InputField handleChange={handleChange} value="3 years" title="3 years" name="test"/>
        <InputField handleChange={handleChange} value="4-5 years" title="4-5 years" name="test"/>
        <InputField handleChange={handleChange} value="work remotely" title="Work remotely" name="test"/>
    
        </div>
        </div>
    )
}

export default Experience;