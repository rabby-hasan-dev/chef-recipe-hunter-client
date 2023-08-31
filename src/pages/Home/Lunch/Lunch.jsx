import foodPic1 from "../../../assets/TakeawayFood/food01.jpg"
import foodPic2 from "../../../assets/TakeawayFood/food02.jpg"
import foodPic3 from "../../../assets/TakeawayFood/food2.jpeg"

const Lunch = () => {
    return (
        <div className="lg:flex justify-center items-center  flex-row-reverse my-16">
            <div className="flex justify-center items-center p-4  lg:w-1/2 ">
                <div >
                    <img src={foodPic2} alt="foodPic" />
                </div>

                <div className="grid grid-cols-1 gap-2 ml-4 ">
                    <img src={foodPic1} alt="foodPic" />
                    <img src={foodPic3} alt="foodPic" />
                </div>

            </div>
            <div className="p-4 lg:w-1/2">
                <h2 className="text-4xl  font-bold">Lunch</h2>
                <p className="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, repudiandae non facilis nesciunt totam voluptates nemo quod expedita aut debitis?</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};

export default Lunch;