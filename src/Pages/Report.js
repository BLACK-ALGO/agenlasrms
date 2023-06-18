import React from 'react'
import './table.css'

const Report = () => {
  return (
    <div className='home bgrd' >
    
  
    </div>
  )
}

const Report1 = () => {
    return (
    // High School Management 
      <div className=' highschool'>
        {/* Add highschool */}
        <div > 
        <div className='center'>
              <p className='f2 b mt4 underline'>Manage Highschools</p>

        </div>
          <div className='center mt5 w-100'>
            
            <form className=' center'>
              <div >
              
             
              <div className="">
              <label htmlFor="name" className="f6 b ">Highschool Name <span className="normal black-60"></span></label>
              <input id="name" name='Hname' className="input-reset ttu ba b--black-20 pa3 mb2 f6 w-100" type="text" aria-describedby="name-desc" />
              <small id="name-desc" className="f6 black-60 db mb2"></small>
            </div>
              

              <div className='mt3'>
              <label htmlFor="comment" className="f6 b db mb2 hide-child">Description <span className="normal black-60"> assafsafasf</span></label>
              <textarea id="comment" name="description" className="db f6  border-box hover-black w-100  ba b--black-20 pa4 br2 mb2" aria-describedby="comment-desc"></textarea>
              
            </div>
            


            <div className="center">
                <input 
               
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 " 
                type="submit" 
                value="Add School"
                />
                </div>
                </div>     

            </form>

          </div>

        </div>
        {/* Display highschool */}

        <div className="pa4">
              <div className="overflow-auto center">
                <table className="f6 w-100 mw8 tc" cellSpacing="2">
                  <thead className='tc'>
                    <tr>
                      <th className="fw6 bb b--black-20  pb3 pr3 bg-white w-30">Highschool</th>
                      <th className="fw6 bb b--black-20  pb3 pr3 bg-white w-70">Description</th>
                      
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    <tr>
                      <td className="pv3 pr3 bb b--black-20 ttu">Hassan Johnson</td>
                      <td className="pv3 pr3 bb b--black-20">@hassan</td>
                      
                    </tr>

                    <tr>
                      <td className="pv3 pr3 bb b--black-20 ttu">Hassan Johnson</td>
                      <td className="pv3 pr3 bb b--black-20">@hassan <span className='tr flex'><img src='' alt='Unable to laod'/></span></td>
                      
                    </tr>
                    
                  </tbody>
                </table>
              </div>
</div>
        
      </div>
    )
  }
  // Field Of Study Management
  const Report2 = () => {
    return (
      <div className=' filedOfstudy'>
                {/* Add highschool */}
                <div > 
        <div className='center'>
              <p className='f2 b mt4 underline'>Manage Field Of Study</p>

        </div>
          <div className='center mt5 w-100'>
            
            <form className=' center'>
              <div >
              
             
              <div class="">
              <label for="name" class="f6 b ">Field Of Study Name <span class="normal black-60"></span></label>
              <input id="name" name='Hname' class="input-reset ttu ba b--black-20 pa3 mb2 f6 w-100" type="text" aria-describedby="name-desc" />
              <small id="name-desc" class="f6 black-60 db mb2"></small>
            </div>

            <div className="measure ">
                  <label
                    htmlFor="Slevel"
                    className="f6 b black">Select Highschool<span className="normal black-60"></span></label>
                  <select className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100" name="userType"  id="userType">
                            <option value="level1">Level 1</option>
                            <option value="level2">Level 2</option>
                    </select>
                  <small id="name-desc" className="f6 black-60 db mb2"></small>
            </div>
              

              <div className='mt3'>
              <label for="comment" class="f6 b db mb2 hide-child">Description <span class="normal black-60"> assafsafasf</span></label>
              <textarea id="comment" name="description" class="db f6  border-box hover-black w-100  ba b--black-20 pa4 br2 mb2" aria-describedby="comment-desc"></textarea>
              
            </div>


            <div className="center">
                <input 
               
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 " 
                type="submit" 
                value="Add School"
                />
                </div>
                </div>     

            </form>

          </div>

        </div>
        {/* Display highschool */}

        <div class="pa4">
              <div class="overflow-auto center">
                <table class="f6 w-100 mw8 tc" cellspacing="2">
                  <thead className='tc'>
                    <tr>
                      <th class="fw6 bb b--black-20  pb3 pr3 bg-white w-30">Field Of Study</th>
                      <th class="fw6 bb b--black-20  pb3 pr3 bg-white w-70">Description</th>
                      
                    </tr>
                  </thead>
                  <tbody class="lh-copy">
                    <tr>
                      <td class="pv3 pr3 bb b--black-20 ttu">Hassan Johnson</td>
                      <td class="pv3 pr3 bb b--black-20">@hassan</td>
                      
                    </tr>

                    <tr>
                      <td class="pv3 pr3 bb b--black-20 ttu">Hassan Johnson</td>
                      <td class="pv3 pr3 bb b--black-20">@hassan <span className='tr flex'><img src=''  alt='Unable to laod'/></span></td>
                      
                    </tr>
                    
                  </tbody>
                </table>
              </div>
</div>
      </div>
    )
  }
// Specialty Managment
  const Report3 = () => {
    return (
      <div className=' specialty'>
            <div > 
        <div className='center'>
              <p className='f2 b mt4 underline'>Manage Specialty</p>

        </div>
          <div className='center mt5 w-100'>
            
            <form className=' center'>
              <div >
              
             
              <div class="">
              <label for="name" class="f6 b ">Specialty Name <span class="normal black-60"></span></label>
              <input id="name" name='Hname' class="input-reset ttu ba b--black-20 pa3 mb2 f6 w-100" type="text" aria-describedby="name-desc" />
              <small id="name-desc" class="f6 black-60 db mb2"></small>
            </div>

            <div className="measure ">
                  <label
                    htmlFor="Slevel"
                    className="f6 b black">Select Field Of Study <span className="normal black-60"></span></label>
                  <select className="input-reset f6 ba b--black-20 pa2 mb2  mt1 mr3  w-100" name="userType"  id="userType">
                            <option value="level1">Level 1</option>
                            <option value="level2">Level 2</option>
                    </select>
                  <small id="name-desc" className="f6 black-60 db mb2"></small>
            </div>
              

              <div className='mt3'>
              <label for="comment" class="f6 b db mb2 hide-child">Description <span class="normal black-60"> assafsafasf</span></label>
              <textarea id="comment" name="description" class="db f6  border-box hover-black w-100  ba b--black-20 pa4 br2 mb2" aria-describedby="comment-desc"></textarea>
              
            </div>


            <div className="center">
                <input 
               
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 " 
                type="submit" 
                value="Add School"
                />
                </div>
                </div>     

            </form>

          </div>

        </div>
        {/* Display highschool */}

        <div class="pa4">
              <div class="overflow-auto center">
                <table class="f6 w-100 mw8 tc" cellspacing="2">
                  <thead className='tc'>
                    <tr>
                      <th class="fw6 bb b--black-20  pb3 pr3 bg-white w-30">Specialty</th>
                      <th class="fw6 bb b--black-20  pb3 pr3 bg-white w-70">Description</th>
                      
                    </tr>
                  </thead>
                  <tbody class="lh-copy">
                    <tr>
                      <td class="pv3 pr3 bb b--black-20 ttu">Hassan Johnson</td>
                      <td class="pv3 pr3 bb b--black-20">@hassan</td>
                      
                    </tr>

                    <tr>
                      <td class="pv3 pr3 bb b--black-20 ttu">Hassan Johnson</td>
                      <td class="pv3 pr3 bb b--black-20">@hassan <span className='tr flex'><img src='' alt='Unable to laod' /></span></td>
                      
                    </tr>
                    
                  </tbody>
                </table>
              </div>
</div>
        

    </div>
    )
  }

export  {Report, Report1, Report2, Report3}
