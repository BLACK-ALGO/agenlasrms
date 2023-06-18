 import './App.css';
 import './Lecturer/Lcss/lec.css';
import SideBar from './component/NavBar/SideBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import {Result, Transcript, SemesterResult, ExamMarks} from './Pages/Result';
import { AddCourses, Courses } from './Pages/Courses';
import LandingPage from './component/LandingPage';
import Alecturer from './Lecturer/Alecturer';
import { Report , Report1, Report2, Report3} from './Pages/Report';
import {Mstudent, Addstudent, Studentlist} from './Pages/Mstudent';
import { Lecturers, AddLecturers } from './Pages/Lecturers';
import './component/CSS/land.css'
import 'tachyons';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state ={
      route :'home',
      isSingIn: false
    }
  }

  onRouteChange = (route) =>{
    if(route === 'home'){
      this.setState({isSingIn: false})
    }else if(route === 'lecturer'){
      this.setState({isSingIn: true})
    }
    this.setState({route: route})
  }

  render(){
  return (
    <div >
       {this.state.route === 'home'
        ?<LandingPage onRouteChange={this.onRouteChange}/>
        :(this.state.route === 'lecturer'
        
        ?<div>
          <Alecturer onRouteChange={this.onRouteChange}/>
        </div>
        : <div>
              < Router  >
              <SideBar sSingIn={this.state.isSingIn} onRouteChange={this.onRouteChange} className='bg-black' />
                  <Routes className='bg-black' >
                    <Route  path='/dashboard' element={<Dashboard/>}  className="home bgrd"/>
                    <Route  path='/student' element={<Mstudent/>}  className="home"/>
                    <Route  path='/student/addstudent' element={<Addstudent/>}  className="home"/>
                    <Route  path='/student/Studentlist' element={<Studentlist/>}  className="home" />
                    <Route  path='/lectures' element={<Lecturers/>}  className="home"/>
                    <Route  path='/lectures/addlectures' element={<AddLecturers/>}  className="home"/>
                    <Route  path='/Result' element={<Result/>}  className="home"/>
                    <Route  path='/result/Transcript' element={<Transcript/>}  className="home"/>
                    <Route  path='/result/exam-marks' element={<ExamMarks/>}  className="home"/>
                    <Route  path='/result/SemesterResult' element={<SemesterResult/>}  className="home"/>
                    <Route  path='/courses' element={<Courses/>}  className="home"/>
                    <Route  path='/courses/addcourses' element={<AddCourses/>}  className="home"/>
                    <Route  path='/manageSchools' element={<Report/>}  className="home"/>
                    <Route  path='/manageSchools/HighSchool' element={<Report1/>}  className="home"/>
                    <Route  path='/manageSchools/FieldOfStudy' element={<Report2/>}  className="home"/>
                    <Route  path='/manageSchools/Specialty' element={<Report3/>}  className="home"/>
                  </Routes>
            </Router>

        </div>)}
      </div>
  );
}
}

export default App;
