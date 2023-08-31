import food1 from "../../../assets/Food Category/mexican-appetizers-top.jpg"
import food2 from "../../../assets/Food Category/roast-beef.jpg"
import food3 from "../../../assets/Food Category/Tandoori-Chicken-Recipe.jpg"
import food4 from "../../../assets/Food Category/vegiterian.jpg"
import food5 from "../../../assets/Food Category/dessert.jpg"
const RecipeCategory = () => {
    return (
        <div className="mx-auto my-20">
            <h2 className="text-4xl font-bold text-center">Recipe Category</h2>
            <div className="grid lg:grid-cols-5 gap-4 my-12 ">
               <div className="text-center">
               <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={food1} />
                    </div>                    
                </div>
                <h2>Appetizer</h2>
               </div>
               <div className="text-center">
               <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={food2} />
                    </div>                    
                </div>
                <h2>Beef</h2>
               </div>
               <div className="text-center">
               <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={food3} />
                    </div>                    
                </div>
                <h2>Chicken</h2>
               </div>
               <div className="text-center">
               <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={food4} />
                    </div>                    
                </div>
                <h2>Vegetarian</h2>
               </div>
               <div className="text-center">
               <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={food5} />
                    </div>                    
                </div>
                <h2>Desserts</h2>
               </div>
               
            </div>
        </div>
    );
};

export default RecipeCategory;