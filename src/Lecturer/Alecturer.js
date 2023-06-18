import React from 'react'
// import { TbAnchor } from 'react-icons/tb'
import './Lcss/lec.css'

const Alecturer = ({onRouteChange}) => {
  return (
    <div className=''>
      {/* topNave */}
      <div className='nav  '>
       <div>
        <p className='link underline b white ttc pointer link dim mr3 f3 mt4' onClick={()=>onRouteChange('home')}>Log Out</p>
       </div>

      </div>
      <div>
      <div className='center mt2 '>
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
            <div className="measure ml3 ">
                  <label
                    htmlFor="Slevel"
                    className="f6 b black">Select Semester <span className="normal black-60"></span></label>
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
                  
                  id="userType"/>
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

           
      </div>
          <div className="center">
                    <input 
                  
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 " 
                    type="submit" 
                    value="Searchs"
                    />
          </div>
      </div>



      <div >
      <div className='center mt3 mb3'>
        <table className='w-90'>
          <thead>
            <th className='pa3 w- '>Student Name</th>
            <th className='pa3 w-30'>CA Marks</th>
          </thead>
          <tbody>
            <td className='max-h'></td>
            <td className='max-h'> <input type='number' className='w-100 max-h'/> </td>
          </tbody>
        </table>
        
        </div>

        <div className='center'>
          <input 
          type='submit' value='save' className='pa2 mb2'
          />

        </div>
      </div>


      
    </div>
  )
}

export default Alecturer
