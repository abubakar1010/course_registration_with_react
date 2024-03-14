import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";

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
    const [contentName, setContentName] = useState('')

    const handleContent = () => {



    }
    return (

        <>
        <div className=" flex gap-14">
            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-24 w-[1100px]">

                {
                    courses.map( (element) => <Course key={element.id} courses={element} handleContent={handleContent} />)
                }

            </div>

            <div>
            <Cart />
            </div>
        </div>
            
        </>
    );
};

export default Courses;