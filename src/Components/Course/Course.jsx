import PropTypes from 'prop-types';
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";

const Course = ({courses, handleContent}) => {

    // console.log(courses);

    const {name, photo, price, description, credit} = courses

    // console.log(name, photo, price, description, id, credit);
    return (
        <>
        <div className='bg-white shadow-2xl py-6 rounded-lg w-[310px] h-[450px] flex flex-col items-center'>

            <img src={photo} alt="" />

            <h1 className='text=[#1C1B1B] font-bold text-xl mt-4 '>{name}</h1>

            <p className=' text-[#1C1B1B99] text-sm px-4 mt-2'>{description}</p>

            <div className='flex mt-4 justify-between w-full px-3'>
                <div className='flex gap-1 items-center' >
                <BsCurrencyDollar className=' text-xl' />
                    <p className='text-[#1C1B1B99] text-xl font-medium '>Price: {price}</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <HiOutlineBookOpen className='text-xl' />
                    <p className='text-[#1C1B1B99] text-xl font-medium '>Credit: {credit} hr</p>
                </div>
            </div>

            <div className='mt-7  w-full px-5'>
                <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 w-full' onClick={ () => handleContent(name,price,credit)}>Select</button>
            </div>

        </div>
            
        </>
    );
};

Course.propTypes = {

    courses: PropTypes.object.isRequired,
    handleContent: PropTypes.func.isRequired
}

export default Course;