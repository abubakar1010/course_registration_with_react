import PropTypes from 'prop-types';

const Cart = ({contentName, contentPrice, contentCredit,remaining}) => {
    console.log(contentName);
    return (
        <>
            <div className=" w-[290px] my-8 bg-white shadow-2xl mt-24 py-8 rounded-lg px-7 space-y-6">
                <h1 className=" font-semibold text-[17px] text-[#2F80ED] border-b-2 border-dashed pb-3">Credit Hour Remaining: {remaining} hr</h1>

            <div className=" border-b-2 border-dashed pb-3">
                
                <h1 className="font-semibold text-xl text-[#1C1B1B] ">Course Name</h1>
                    <ul className=' list-decimal mt-4'>
                {
                    contentName.map( (element,index) => <li key={index}>{element}</li>)
                    
                }
                </ul>
            </div>
            <h1 className=" font-semibold text-xl text-[#2F80ED] border-b-2 border-dashed pb-3">Total Credit Hour : {contentCredit}</h1>
            <h1 className=" font-semibold text-xl text-[#2F80ED] border-b-2 border-dashed pb-3">Total Price : {contentPrice} USD</h1>
            </div>
        </>
    );
};

Cart.propTypes = {

    contentName: PropTypes.array.isRequired,
    contentPrice: PropTypes.number.isRequired,
    contentCredit: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
}
export default Cart;