import fBanner1 from '../../../assets/Banner/Banner (1).jpg'
import fBanner2 from '../../../assets/Banner/Banner (2).jpg'
import fBanner3 from '../../../assets/Banner/Banner (3).jpg'
import fBanner4 from '../../../assets/Banner/Banner (4).jpg'

const FollowUs = () => {
    return (
        <div className='my-12 '>
            <div>
            <h2 className="text-4xl font-bold text-center">Follow Us</h2>
            <p className="text-center text-xl my-4">Be the first receive Our news about the chef and recipe</p>
            </div>
            <div className='mt-16 grid grid-cols-2 gap-4 lg:p-20 '>
            <img src={fBanner1} alt="img" />
            <img src={fBanner2} alt="img" />
            <img src={fBanner3} alt="img" />
            <img src={fBanner4} alt="img" />
            </div>
        </div>
    );
};

export default FollowUs;