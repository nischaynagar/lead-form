import React, { useState } from 'react';
import {ReactComponent as MainuiImg} from "../assests/mainuiImg.svg";
import { ReactComponent as ArrowIcon } from '../assests/icon-arrow.svg';
import { ReactComponent as FinalImg } from '../assests/finalImg.svg';
import { ReactComponent as Whatsapp } from '../assests/icon-whatsapp.svg';
import { ReactComponent as SelectBtnIcon } from '../assests/icon-pagebtn.svg';
import "./style.css";


const options = [
    { label:"a.   Custom web development", value:"a.   Custom web development"}, 
    { label:"b.   Decentralised Application", value:"b.   Decentralised Application"},
    { label:"c.   E-commerce Website", value:"c.   E-commerce Website"},
    { label:"d.   Custom smart contract", value:"d.   Custom smart contract"},
];


export default function Page({pagenum, handlePageUp, handlePageDown})
{
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    
    const CustomSelect = ({ options }) => {
      const handleToggleOptions = () => {
        setShowOptions((prevShowOptions) => !prevShowOptions);
      };
    
      const handleSelectOption = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
      };
    
      return (
        <div className="custom-select">
          <div
            className="select-button"
            onClick={handleToggleOptions}
            style={{ backgroundColor: selectedOption ? "#fff" : "#1D3852", color: selectedOption ? "#333" : "#bbb", 
            borderRadius : showOptions ? "10px 10px 10px 0" : "10px" }}
          >
            <div className='selectedTxt'
                 style={{ 
                    opacity: selectedOption ? "1" : "0.5", }}
            >
                {selectedOption ? selectedOption.label : "Select a service"}
            </div>
            <div 
                className='selectBtnWrapper'
            >
                <SelectBtnIcon className={`arrow ${showOptions ? "open" : ""}`} />
            </div>
          </div>
          {showOptions && (
            <div className="options">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`option ${option === selectedOption ? "selected" : ""}`}
                  onClick={() => handleSelectOption(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      );
      };
    

    return (
        <>
       { pagenum === 0 &&( <div  className='App'>
            <div className='mainuiWrapper'>
                <MainuiImg className='mainuiImg' />
                <div className='mainuiheading'>Hello! We're glad that you're interested in working with us.<br/>Let’s get started 👋</div>
                <div className='LetsgoBtn' onClick={handlePageUp}>Let’s Go</div>
             </div>
        </div>)}
        {
            pagenum === 1 && (
            <div className='App'>
                <div className='formWrapper'>
                    <div className='counterDiv'>1. <ArrowIcon className='arrowIcon' /></div>
                    <div className='questionWrapper'>
                        <div className='primaryTxt'>Your name *</div>
                        <div className='secondaryTxt'>Let’s get to know each other</div>
                        <input className='nameInput' type="text" autoComplete="name" placeholder='type in your name' />
                        <div className='okBtn' onClick={handlePageUp}>OK</div>
                    </div>
                </div>
            </div>
            ) 
        }
        
       {
        pagenum === 2 && (
            <div className='App'>
                <div className='formWrapper'>
                    <div className='counterDiv'>2. <ArrowIcon className='arrowIcon' /></div>
                    <div className='questionWrapper'>
                        <div className='primaryTxt'>What service do you need from us ?</div>
                        <CustomSelect options = {options} defaultValue={1}/>
                        {selectedOption &&  <div className='okBtn' onClick={handlePageUp}>OK</div>}
                    </div>
                </div>
            </div> 
        )
        }
        
        {
           pagenum === 3 && 
           (<div className='App'>
                <div className='congratsWrapper'>
                    <FinalImg/>
                    <div className='congratsTxt'>You have made it!🥳 We have your information now and will be getting in touch with you shortly. Till then sit back and relax 🤙</div>
                    <div className='contactUsWrapper'>
                        <div className='contactUsTxt'>Can’t wait? Contact us <span className='highlightedTxt'>NOW</span></div>
                        <Whatsapp className='whatsappIcon'/>
                    </div>
                </div>
            </div>
        )}
        </>  
      
    );
}