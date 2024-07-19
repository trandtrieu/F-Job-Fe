import React, { Component } from 'react';
import InputField from '../components/InputField';

const Experience = ({handleChange, handleClick}) =>{
    return(
        <div className=''>
            <h4 className='text-lg font-medium mb-2'>Experience</h4>   
     <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
            <span className='checmark'></span> All
        </label>
        
        <InputField handleChange={handleChange} value="internship" title="Internship" name="test"/>
        <InputField handleChange={handleChange} value="fresher" title="Fresher" name="test"/>
        <InputField handleChange={handleChange} value="junior" title="Junior" name="test"/>
        <InputField handleChange={handleChange} value="senior" title="Senior" name="test"/>
        <InputField handleChange={handleChange} value="work remotely" title="Work remotely" name="test"/>
    
        </div>
        </div>
    )
}

export default Experience;