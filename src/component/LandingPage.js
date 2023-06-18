import React, {useState} from 'react'
import './CSS/land.css'

const LandingPage = ({onRouteChange}) => {
  const [selects, setSelect] = useState();
  return (
    <div >
        <div className='land center white '>
        <article className="br5 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center mt4 pointer bg-light-silver  " >
        <main className="pa4 black-80 ">
          {/* form */}
            <div className="measure  ">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 white mh0 center">Sign In</legend>
                <div className="mt3 ">
                    <label className="db fw7 lh-copy f9" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mt3">
                    <label className="db fw7 lh-copy f9" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>
                <div className="mt3">
                    <label className="db fw7 lh-copy f9" htmlFor="userType">Select User Type</label>
                    <select className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    value={selects} onChange={e => setSelect(e.target.value)}
                    name="userType"  id="userType">
                            <option>Select</option>
                            <option value="admin">Admin</option>
                            <option value="lecturer">Lecturer</option>
                    </select>
                </div>
                </fieldset>
                <div className="center">
                <input 
                onClick={selects === 'lecturer'
                ?()=>onRouteChange('lecturer')
                : ()=>onRouteChange('admin')}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib  " 
                type="submit" 
                value="Sign In"
                />
                </div>
                

                <div className="lh-copy mt3 center">
                <p  className="f5 pointer link dim black db">Resgister</p>
                </div>
            </div>
        </main>
</article>
        </div>
      <div className='bottom'>
        <h1 className='text fonts pointer' >
            Welcome to Agenla School Result Mangement System     
        </h1>
      </div>
    </div>
  )
}

export default LandingPage
