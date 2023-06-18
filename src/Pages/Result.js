import React, {useRef} from 'react'
import { useReactToPrint } from 'react-to-print';

const Result = () => {
  return (
    <div className='home bgrd'>
      <h1>Result</h1>
    </div>
  )
}

const Transcript = () => {
  return (
    <div className='home bgrd'>
      <h1>Transcript</h1>
    </div>
  )
}

const SemesterResult = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div >
      <div>
      <div className='center mt2' >
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
      </div >
      {/*  result form */}
      <div className=' mb2' ref={componentRef}>
        {/* top result form */}
          <div className=' w-70 center flex justify-between tc bb bw2 mt3'>
            <div className=''>
              <p className='f3 b mb1 ttu'>Republic Of Cameroon</p>
              <p className='i' >Peac-Work-Fatherland</p>
              <p>***************</p>
              <p className='b'> MINISTRY OF HIGHER EDUCATION </p>
              <p>***************</p>
              <p className='mt1'>BILINGUAL SUB-REGIONAL UNIVERSITY </p>
              <p> INSTITUTE AGENLA ACADEMY, YAOUNDE </p>
              <p className='i mt1 mb1' >Professionalism-Excellence-Integrity</p>

            </div>
            <div className='center w-30'>
              
              <p className='bgrd'></p>
              
            </div>
            <div>
            <p className='f3 b ttu'>Republique Du Cameroun</p>
            <p className='i' >Paix-Travail-Patrie</p>
              <p>***************</p>
              <p className='b'> MINISTETRE DE L'ENSEIGNEMENT SUPERIEUR </p>
              <p>***************</p>
              <p className='mt1'>INSTITUT UNIVERSITAIRE SOUS-REGIONAL </p>
              <p> BILINGUE AGENLA ACADEMY, YAOUNDE </p>
              <p className='i mt1 mb1' >ProfessioNnalismE-Excellence-Integrite</p>

              
            </div>

          </div>
        {/* Body of result form */}
          <div className='w-30 db center'>
            {/* Middile form */}
            <div className='flex justify-between'> 
              <div className=''>
                <p className='mt2' >Anne Academique : <br/>Academic year <span> </span> </p>
                <p className='mt2' >Field / Filiere : <span> </span> </p>
                <p className='mt2' >Specialty / Specialite : <span> </span> </p>

              </div>
              <div>
              <p className='mt2' >Semester : <br/>Semestre <span> </span> </p>
                <p className='mt2' >Level / Niveau : <span> </span> </p>
              </div>
              
            </div>

          </div>
          <div className='center mt3'>
            <table className='w-40'>
              <tr className='tl'>
                <th>Course title <br/> Intitule de L'UE <span></span></th>
                <th>Course code <br/> code <span></span></th>
                <th>Credits <br/> Credits <span></span></th>
                
              </tr>
            </table>
          </div>
          <h1 className='tc f4 underline'>RESULT AT THE END OF THE NORMAL SESSION</h1>

          <div className='center'>
            <div className=' ba bw2 w-18'>
              < p className='tc b pa2 mt3'>Statistics</p>
            </div>
             <table className='bw2 w-20 tl'>
              <tr >
                <th >Headcount  <span className='tr'></span></th> 
              </tr>
              <tr >
                <th >Success rate  <span className='tr'></span></th> 
              </tr>
              <tr >
                <th >Nber {'>'}= 45/100 <span className='tr'></span></th> 
              </tr>
              
             </table>
          </div>
          {/* main table for results */}
          <div className='center mt3'>
            <table className='w-90'>
              <thead>
                <tr>
                  <th rowspan="3">Matricule <br/> Number</th>
                  <th rowspan="3">Noms et Prenoms <br/> Names and Surnames</th>
                  <th>CC + TP</th>
                  <th>Examen</th>
                  <th rowspan="3">Tot./100</th>
                  <th rowspan="3">Grade</th>
                  <th rowspan="3">Qual Point</th>
                  <th rowspan="2">Point Acc</th>
                  <th rowspan="3">Appreciation</th>
                  <th rowspan="3">Cerdit <br/> Capitalised </th>
                  <th rowspan="3">Session [N] or [R]</th>
                  
                </tr>

                <tr>
                  <th>tot</th>
                  <th>tot</th>
                  
                </tr>
                <tr>
                  <th>%</th>
                  <th>%</th>
                  <th>0.75</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className='ba'>
                    dfds
                  </td>
                  <td className='ba'>
                    dfds
                  </td>
                  <td className='ba'>
                    dfds
                  </td>
                  <td className='ba'>
                    dfds
                  </td>
                  <td className='ba'>
                    dfds
                  </td>
                  <td className='ba'>
                    dfds
                  </td>
                  <td className='ba'>
                    dfds
                  </td>
                  <td className='ba'>
                    dfds
                  </td>
                  <td className='ba'>
                    dfds
                  </td>
                  <td className='ba'>
                    dfds
                  </td>
                  <td className='ba'>
                    dfds
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
      </div>

      <div className="center">
                
                <button
                className="b mb2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 mt3" 
                onClick={handlePrint}
                >Print</button>
                </div>

      
    </div>
  )
}

const ExamMarks = () => {
  return (
    <div className=' '>
      <div className='center '>
        <h1 className='underline'>Fill Exam Marks</h1>
      </div>

      <div >
        {/* Input Selection */}
        <div className='center mt3'>
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
      <form className='center mt3 mb3'>
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
        
        </form>

        <div className='center'>
          <input 
          type='submit' value='save' className='pa2 mb2'
          />

        </div>
      </div>


      
    </div>
  )
}



export {Result, Transcript, SemesterResult, ExamMarks};
