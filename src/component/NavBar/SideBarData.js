import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as TbIcons from 'react-icons/tb'
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as GoIcons from 'react-icons/go';
import * as BsIcons from 'react-icons/bs';

export const SideBarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillDashboard/>,
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'User',
                path: '/overview/user',
                icon: <IoIcons.IoIosPaper/> 
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper/> 
            },
        ]
    },

    {
        title: 'Manage Schools',
        path: '/manageSchools',
        icon: <TbIcons.TbReport/>,
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'High School',
                path: '/manageSchools/HighSchool',
                icon: <IoIcons.IoIosPaper/> 
            },
            {
                title: 'Field Of Study',
                path: '/manageSchools/FieldOfStudy',
                icon: <IoIcons.IoIosPaper/> 
            },
            {
                title: 'Specialty',
                path: '/manageSchools/Specialty',
                icon: <IoIcons.IoIosPaper/> 
            }
        ]
    }, 
    {
        title: 'Result',
        path: '/result',
        icon: <IoIcons.IoMdAnalytics/>,
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Semester Result',
                path: '/result/SemesterResult',
                icon: <IoIcons.IoIosPersonAdd />
            },
            {
                title: 'Transcript',
                path: '/result/Transcript',
                icon: <IoIcons.IoIosPersonAdd />
            },
            {
                title: 'Exam Marks',
                path: '/result/exam-marks',
                icon: <IoIcons.IoIosPersonAdd />
            }
            

        ]
    },
    {
        title: 'Lectures',
        path: '/lectures',
        icon: <GiIcons.GiTeacher />,
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Add Lecturer',
                path: '/lectures/addlectures',
                icon: <IoIcons.IoIosPersonAdd />
            },
            
        ]
    },
    {
        title: 'Student',
        path: '/student',
        icon: <IoIcons.IoIosPeople />,

        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Add Student',
                path: '/student/addstudent',
                icon: <IoIcons.IoIosPersonAdd />
            },
            {
                title: 'Students List',
                path: '/student/studentlist',
                icon: <BsIcons.BsCardList />
            }
        ]

    },
    {
        title: 'Courses',
        path: '/courses',
        icon: <GoIcons.GoFileSubmodule /> ,
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Add Courses',
                path: '/courses/addcourses',
                icon: <AiIcons.AiOutlineAppstoreAdd />
            }
        ]
    }

]
