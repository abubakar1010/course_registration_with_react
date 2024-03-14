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

    const [remaining, setRemaining] = useState(15)

    const [contentName, setContentName] = useState([])

    const [contentPrice, setContentPrice] = useState(0)

    const [contentCredit, setContentCredit] = useState (0)


    

    const handleContent = (name,price,credit) => {

        
        if ( credit > remaining) {
            return alert('oops! you are able to select maximum 15 credit hour')
        }
        const isHad = contentName.find( element => element === name)
        if (isHad) {
            return alert('oops! You don not have able to select a particular content in multiple time ')
        }
        const maxCreditHours = remaining - parseInt(credit)
        setRemaining(maxCreditHours)
        const contents = [...contentName,name]
        setContentName(contents)

        const updatedPrice = contentPrice + parseInt(price)

        const updatedCredit = contentCredit + parseInt(credit)


        setContentPrice( updatedPrice )
        setContentCredit( updatedCredit )

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
            <Cart contentName={contentName} contentPrice={contentPrice} contentCredit={contentCredit} remaining={remaining}  />
            </div>
        </div>
            
        </>
    );
};

export default Courses;