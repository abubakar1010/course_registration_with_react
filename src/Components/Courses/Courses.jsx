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
        <div>

            {
                courses.map( (element) => <Course key={element.id} courses={element} />)
            }
        </div>
            
        </>
    );
};

export default Courses;