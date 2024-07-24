import React, { Component } from 'react';
import InputField from '../components/InputField';

const Employment = ({handleChange}) =>{
    return(
        <div className=''>
            <h4 className='text-lg mb-2' style={{ fontSize:"19px", fontWeight:"bold"}}>Employment Type</h4>   
     <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
            <span className='checmark'></span> All
        </label>
        <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="test"/>
        <InputField handleChange={handleChange} value="part-time" title="Part-time" name="test"/>
        <InputField handleChange={handleChange} value="full-time" title="Full-time" name="test"/>
    
        </div>
        </div>
    )
}

export default Employment;