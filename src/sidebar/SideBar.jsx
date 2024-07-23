import React from 'react';
import Location from './Location';
import Experience from './Experience';
import Employment from './Employment';
import Salary from './Salary';

const SideBar = ({handleChange,handleClick}) => {
    return (
        <div className='space-y-5'>
            <h1 className='text-xl font-bold mb-2'>Filter</h1>
            <Location handleChange={handleChange}/>
            <Experience handleChange={handleChange} handleClick={handleClick}></Experience>
            <Salary handleChange={handleChange} handleClick={handleClick} />
            <Employment handleChange={handleChange} handleClick={handleClick}/>
            
        </div>
    );
};

export default SideBar;