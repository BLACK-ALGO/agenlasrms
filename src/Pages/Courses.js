import React from 'react'

const Courses = () => {
  return (
    <div className='home bgrd'>
      <h1>Courses</h1>
    </div>
  )
}

const AddCourses = () => {
    return (
      <div className='bgrd '>
        {/* Add Courses */}
        <div> 
          {/*  */}
          <h1 className='center f1 underline'>Add a Course</h1>
          <div className=''> 
          <article className="br2 ba  pa3 b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center mt4 pointer  " >
            {/* form */}
             <div className="  w-100">
             <div className="mt3 ">
                    <label className="db fw7 lh-copy f9" htmlFor="course-name">Course Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="course-name"  id="email-address"/>
                </div>
                <div className="mt3 ">
                    <label className="db fw7 lh-copy f9" htmlFor="course-code">Course Code</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="course-code"  id="email-address"/>
                </div>

                <div className="mt3 ">
                    <label className="db fw7 lh-copy f9" htmlFor="course-credit">Course Credit</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="course-credit"  id="email-address"/>
                </div>

                <div className="mt3 ">
                    <label className="db fw7 lh-copy f9" htmlFor="course-specialty">Course Specialty</label>
                    <select className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100  hover-bg-black" name="course-specialty"  id="userType">
                            <option value="level1">Level 1</option>
                            <option value="level2">Level 2</option>
                    </select>
                </div>

                <div className="mt3 ">
                    <label className="db fw7 lh-copy f9" htmlFor="course-level">Course Level</label>
                    <select className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100  hover-bg-black" name="course-level"  id="userType">
                            <option value="level1">Level 1</option>
                            <option value="level2">Level 2</option>
                    </select>
                </div>

                <div className="mt3 ">
                    <label className="db fw7 lh-copy f9" htmlFor="course-semester">Course Semester</label>
                    <select className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100  hover-bg-black" name="course-mester"  id="userType">
                            <option value="level1">Level 1</option>
                            <option value="level2">Level 2</option>
                    </select>
                </div>


                <div className="center">
                <input 
               
                className="br2 mt2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib  " 
                type="submit" 
                value="Sign in"
                />
                </div>

             </div>
          </article>


          </div>
          {/* Display courses */}

          <div className='center' >
            <table>
              <thead>
                <tr className='pa2'>
                  <th className='pa3'>Course Name</th>
                  <th className='pa3'>Course Code</th>
                  <th className='pa3'>Course Cradit</th>
                  <th className='pa3'>Course Specialty</th>
                  <th className='pa3'>Course Level</th>
                </tr>
              </thead>
              <tbody className='tc'>
                <tr className='bg-silver'>
                  <td>Maths</td>
                  <td>Maths</td>
                  <td>Maths</td>
                  <td>Maths</td>
                  <td>Maths</td>
                </tr>
              </tbody>
            </table>

          </div>

        </div>
        
      </div>
    )
  }

export { Courses ,AddCourses}
