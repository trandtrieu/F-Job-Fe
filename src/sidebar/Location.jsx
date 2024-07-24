import React from 'react';
import InputField from '../components/InputField';

const Location = ({handleChange}) => {
    return (
        <div>
             <h4 className='text-lg mb-2' style={{ fontSize:"19px", fontWeight:"bold"}}>Location</h4>
        <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
            <span className='checmark'></span> All
        </label>
        <InputField handleChange={handleChange} value="da nang" title="Da Nang" name="test"/>
        <InputField handleChange={handleChange} value="ha noi" title="Ha Noi" name="test"/>
        <InputField handleChange={handleChange} value="tp ho chi minh" title="TP Ho Chi Minh" name="test"/>
    
        </div>

        
        </div>
    );    
};

export default Location;