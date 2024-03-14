import PropTypes from 'prop-types';

const Course = ({courses}) => {

    // console.log(courses);

    const {name, photo, price, description,id, credit} = courses

    console.log(name, photo, price, description, id, credit);
    return (
        <div>
            <h2>Data</h2>
        </div>
    );
};

Course.propTypes = {

    courses: PropTypes.object.isRequired
}

export default Course;