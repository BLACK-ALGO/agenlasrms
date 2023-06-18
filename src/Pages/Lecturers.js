import React from 'react'

const Lecturers = () => {
  return (
   
    <div className='home bgrd'>
      <h1>lectures</h1>
    </div>
      
  )
}

const AddLecturers = () => {
    return (
      
      <div   className=' mt3' >
        {/* Add lectures form */}
      <div className=" " >
        
        <form className=" pa4 black-80   bgrd " >
        <legend className="f1 fw6 ph0  mh0 center ns underline">Add Lecturer</legend>
          <div className='flex w-100 center '>
          <div className=' w-25 pa3 mr2 '>
              <div className="measure ">
              <label
                htmlFor="name"
                className="f6 black b ">Lecturer Name <span className="normal black-60"></span></label>
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
                className="f6 b black">Lecturer Matricule <span className="normal black-60"></span></label>
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
                className="f6 b black">Lecturer Email <span className="normal black-60"></span></label>
              <input
                id="Semail"
                className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100"
                type="email"
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
                    htmlFor="Sgender"
                    className="f6 b black ">Gender<span className="normal black-60"></span></label><br/>
                      <input className='mt2 ' type="radio" name="gender" value="male"/> Male<br/>
                      <input type="radio" name="gender" value="female"/> Female<br/>

                  <small id="name-desc" className="f6 black-60 db mb2"></small>
                  </div>


            </div>
            </div>
            <div className="center">
                <input 
               
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 " 
                type="submit" 
                value="Register"
                />
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

export {Lecturers, AddLecturers}
