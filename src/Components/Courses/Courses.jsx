import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses, setCourses] = useState([])

    useEffect( () => {

        const callApi = async () => {

            const response = await fetch('courses.json');

            const data = await response.json()

            setCourses(data)
        }

        callApi()
    },[])
    // console.log(courses);
    return (
        <>
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-24">

            {
                courses.map( (element) => <Course key={element.id} courses={element} />)
            }
        </div>
            
        </>
    );
};

export default Courses;