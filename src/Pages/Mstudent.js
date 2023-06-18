import React, {useRef} from 'react'
import logo from './images/LOGO.png'
import * as TbIcons from 'react-icons/tb'
import { useReactToPrint } from 'react-to-print';
// import { ComponentToPrint } from '../ComponentToPrint';


    // STUDENT lIST
const Studentlist = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  return (
    <div >
        <div>
             <div className='center mt2'>
        {/* Input Selection */}
        <div className="measure  ">
                  <label
                    htmlFor="Slevel"
                    className="f6 b black">Select Specialty <span className="normal black-60"></span></label>
                  <select className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100" name="userType"  id="userType">
                            <option value="level1">Level 1</option>
                            <option value="level2">Level 2</option>
                    </select>
                  <small id="name-desc" className="f6 black-60 db mb2"></small>
            </div>
            <div className="measure ml3">
                  <label
                    htmlFor="Slevel"
                    className="f6 b black">Select Academic Year<span className="normal black-60"></span></label>
                  <select className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100" name="userType"  id="userType">
                            <option value="level1">Level 1</option>
                            <option value="level2">Level 2</option>
                    </select>
                  <small id="name-desc" className="f6 black-60 db mb2"></small>
            </div>

            <div className="measure ml3">
                  <label
                    htmlFor="Slevel"
                    className="f6 b black">Select Level<span className="normal black-60"></span></label>
                  <select className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100" name="userType"  id="userType">
                            <option value="level1">Level 1</option>
                            <option value="level2">Level 2</option>
                    </select>
                  <small id="name-desc" className="f6 black-60 db mb2"></small>
            </div>

            <div className="measure ml3">
                  <label
                    htmlFor="Slevel"
                    className="f6 b black">Select Academic Year<span className="normal black-60"></span></label>
                  <input  type="month" className="input-reset f6 ba b--black-20 pa2 mb2  mt1   w-80" name="userType"  
                  value="2001-06"
                  
                  id="date"/>
                  <small id="name-desc" className="f6 black-60 db mb2"></small>
            </div>
      </div>
          <div className="center">
                    <input 
                  
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 " 
                    type="submit" 
                    value="Searchs"
                    />
          </div>
      </div>
      <div>
            <div className='center '>
              <h1 className='underline'>Get Student Class List</h1>
            </div>
      </div>
      {/* list it self */}
      {/* <ReactToPrint
                  trigger={()=>{
                    return <button              
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 " 
                    >Print List</button>
                  }}
                  content={()=>this.componentRef}
                  documentTitle='Student List'
                  pageStyle='print'
                
                /> */}
                {/*  */}
    <div className='center '>
      <div className='ba ' ref={componentRef}>
        <div > 
          
              <div className='w-70 center flex justify-between tc  bw2 mt5'>
                <div className=''><p>Fiel:<br/> Level: </p> </div>
                <div><img className='center ' alt='Logo' src={logo} style={{width: 150, height: 150}}/> </div>
                <div ><p>Academic Year:</p> <h1 className='center ba pa3'>SWE1</h1></div>
                
              </div >
              <div className='flex'>
                <h1 className='center underline'>EVALUATION LIST</h1> 
              </div>
        </div>
        <div className="pa4">
<div className="overflow-auto center mb1 ">
  
<table
  className="f6 w-100 mw8 ba "
  cellspacing="2"
>

<thead>
<tr>
    <th colspan="3" >

      <p className='flex justify-around'>
        <div>
         <TbIcons.TbRectangle /><span> CC  &nbsp;</span> <TbIcons.TbRectangle /><span> TP  &nbsp;</span> 
      <TbIcons.TbRectangle /><span> TPE  &nbsp;</span> <TbIcons.TbRectangle /><span> Exam  &nbsp;</span>  
      </div>
      <div className='flex'>
        <p>   Session  &nbsp;</p>
      <TbIcons.TbCircle /><span> N&nbsp;</span> <TbIcons.TbCircle /><span> R</span>
      </div>
      </p>
      
    </th>
    <th rowspan="3" style={{transform: [{rotate: '180deg'}]}}> Student's signature</th>
    <th rowspan="3">Number Of Supplemtry sheets</th>
    <th rowspan="3">Anonymity</th>
    <th rowspan="3">MARKS/...</th>
    <th rowspan="3" className='dismod'>
      Observation
    </th>
    
    
  </tr>
  <tr>
  <th colspan="3" className='vertical-rl tl'>
    <di >
      <p className="ml5">Course tittle :.............................................</p>
      <p className="ml5">Lecturer's name :............................................</p>
      <p className="ml5">Date of Evaluation :...../....../....... Semester :..............</p>
    </di>
  </th>
    
    
  </tr>
  <tr>
  <th >No</th>
  <th >Mareicule</th>
    <th >Name and Surname</th>
    
  </tr>

</thead>
<tbody className="lh-copy">
          <tr className="stripe-dark grow">
          <th className='pa1' >Name</th>
    <th>Age</th>
    <th >Name</th>
    <th>Age</th>
    <th >Name</th>
    <th>Age</th>
    <th >Name</th>
    <th >Name</th>
          </tr>

</tbody>
</table>
</div>
    <div className='w-100 center mt1'>
      <p className='ba pa3'> Hall :......................from no....................to no :.........................</p>

    </div>
    <div className='w-100  mt1 center'>
      <div className='w-25 ba pa2 '>
        <div>
          <tr >
            <td>Number of student register&nbsp;</td>
            <td className='ba pa3'> &nbsp;</td>
          </tr>
          <tr >
            <td>Number of student present</td>
            <td className='ba pa3 mb1'> &nbsp;</td>
          </tr>
          <tr >
            <td>Number of student absent</td>
            <td className='ba pa3'> &nbsp;</td>
          </tr>
          <tr >
            <td>Student Absent</td>
            <td className='ba pa3'> &nbsp;</td>
          </tr>
          <tr >
            <td>Number of copies desposited </td>
            <td className='ba  pa3'> &nbsp;</td>
          </tr>
        </div>
      
      </div>
      <div className='w-50 ba ml1 '>
        <p className='b'>
          &nbsp;Ivigilation Report :<br/>
          
        </p>
          
      </div>
    </div>
    <div className='center mt2'>
        <table className='w-70'>
          <tr>
            <th className='pa1'>Name and signature of ibigilators</th>
            <th>Name and signature of anonymator</th>
            <th>Name and signature of marker</th>

          </tr>

          <tbody>
          <tr >
            <th className='pa2 tl'>1.</th>
            
            <th rowspan="2" >..........................................
                <p>Date : ............................</p>
            </th>
            <th rowspan="2" >..........................................
            <p>Date :............................</p></th>
            
          </tr>
          <tr>
            <th className='pa2 tl'>2.</th>
            
            
          </tr>
          </tbody>
        </table>

      </div>

      
</div>
    
    
      </div>
      
      </div>
              <div className="center">
                {/* <input 
               
                
                type="submit" 
                value="Print"
                /> */}
                <button className="b ph3 mt1 mb1 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 " 
                 onClick={handlePrint}>Print this out!</button>
                </div> 
                
    </div>
  )
}

export default Studentlist



const Mstudent = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className='home bgrd'>
      <div ref={componentRef}>
      {/* <ComponentToPrint  /> */}
      <button onClick={handlePrint}>Print this out!</button>
    </div>
    </div>
  )
}

// form to add a student
const Addstudent = () => {
    return (
    <div   className=' mt3' >
      <div className=" " >
        
        <form className=" pa4 black-80   bgrd " >
        <legend className="f1 fw6 ph0  mh0 center ns underline">Add A Student</legend>
          <div className='flex w-100 center '>
          <div className=' w-25 pa3 mr2 '>
              <div className="measure ">
              <label
                htmlFor="name"
                className="f6 black b ">Student Name <span className="normal black-60"></span></label>
              <input
                id="Sname"
                className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100"
                type="text"
                aria-describedby="name-desc"
              />
              <small id="name-desc" className="f6 black-60 db mb2"></small>
              </div>

              <div className="measure db">
              <label
                htmlFor="Smatricule"
                className="f6 b black">Student Matricule <span className="normal black-60"></span></label>
              <input
                id="Smatricule"
                className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100"
                type="text"
                aria-describedby="name-desc"
              />
              <small id="name-desc" className="f6 black-60 db mb2"></small>
              </div>

              <div className="measure db">
              <label
                htmlFor="Semail"
                className="f6 b black">Student Email <span className="normal black-60"></span></label>
              <input
                id="Semail"
                className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100"
                type="email"
                aria-describedby="name-desc"
              />
              <small id="name-desc" className="f6 black-60 db mb2"></small>
              </div>

              <div className="measure db">
              <label
                htmlFor="Sdate"
                className="f6 b black">Date Of Birth<span className="normal black-60"></span></label>
              <input
                id="Sdate"
                className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100"
                type="date"
                aria-describedby="name-desc"
              />
              <small id="name-desc" className="f6 black-60 db mb2"></small>
              </div>

            </div>  
            <div className='  w-25 pa3 mr2'>
                <div className="measure ">
                  <label
                    htmlFor="language"
                    className="f6 b black">Prefer Language<span className="normal black-60"></span></label>
                  <select className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100" name="userType"  id="userType">
                            <option value="English">English Language</option>
                            <option value="French">French Language</option>
                    </select>
                  <small id="name-desc" className="f6 black-60 db mb2"></small>
                  </div>

                  <div className="measure ">
                  <label
                    htmlFor="Slevel"
                    className="f6 b black">Level<span className="normal black-60"></span></label>
                  <select className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100" name="userType"  id="userType">
                            <option value="level1">Level 1</option>
                            <option value="level2">Level 2</option>
                    </select>
                  <small id="name-desc" className="f6 black-60 db mb2"></small>
                  </div>

                  <div className="measure ">
                  <label
                    htmlFor="Sspecialty"
                    className="f6 b black">Specialty<span className="normal black-60"></span></label>
                  <select className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100" name="userType"  id="userType">
                            <option value="level1">SWE</option>
                            <option value="level2">LMT</option>
                    </select>
                  <small id="name-desc" className="f6 black-60 db mb2"></small>
                  </div>

                  <div className="measure ">
                  <label
                    htmlFor="Sgender"
                    className="f6 b black ">Gender<span className="normal black-60"></span></label><br/>
                      <input className='mt2 ' type="radio" name="gender" value="male"/> Male<br/>
                      <input type="radio" name="gender" value="female"/> Female<br/>

                  <small id="name-desc" className="f6 black-60 db mb2"></small>
                  </div>


            </div>
            </div>
            <div className="center">
                {/* print  button */}
                </div>


        </form>
        
    </div>
    <div className='center'>
        <p>
          welcome 
        </p>
    </div>

    </div>
    )
  }

export{Mstudent , Addstudent, Studentlist}