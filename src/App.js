import React, { useState } from 'react';
import { ReactComponent as PageBtnIcon } from './components/assests/icon-pagebtn.svg';

import './App.css';
import Page from './components/Page';

function App() {

  const [pagenum, setPagenum] = useState(0);

  const handlePageUp = ()=>{
    if(pagenum+1>=3)
    {
      setPagenum(3);
    } else{
      setPagenum(pagenum+1);
    }
  }

  const handlePageDown = ()=>{
    if(pagenum-1<0)
    {
      setPagenum(0);
    } else{
      setPagenum(pagenum-1);
    }
  }


  return (
    <div className="main">
     <Page pagenum={pagenum} handlePageUp={handlePageUp} handlePageDown={handlePageDown} />
     <div className='pagebtn'>
        <div className='pagebtn2' onClick={handlePageUp}>
          <PageBtnIcon className='pagebtn2Icon'/>
        </div>
        <div className='pagebtn1' onClick={handlePageDown}>
         <PageBtnIcon className='pagebtn1Icon'/>
        </div>
        <div className='matrixlabDiv'>made with 💛 by Matrix Labs</div>
     </div>

    </div>
  );
}

export default App;
