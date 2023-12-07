import { useNavigate } from 'react-router-dom'
import BlogItem from '../../../components/BlogItem'
import { getKey } from '../../../utils'
import { useSelector } from 'react-redux'
import { RootState, useAppSelector } from '../../../stores/Store'
const Blogs = () => {

    // const blogs = [
    //     {
    //         id: 'z',
    //         date: 'May 29, 2022',
    //         heading: 'Your Dog Desperately Needs From You',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: 's',
    //         date: 'May 29, 2022',
    //         heading: 'Tips For Keeping Your Dog Normal During the Winter',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: 's',
    //         date: 'May 29, 2022',
    //         heading: 'Tips For Keeping Your Dog Normal During the Winter',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: 'd',
    //         date: 'May 29, 2022',
    //         heading: 'Tips For Keeping Your Dog Normal During the Winter',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: 's',
    //         date: 'May 29, 2022',
    //         heading: 'Tips For Keeping Your Dog Normal During the Winter',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: '',
    //         date: 'May 29, 2022',
    //         heading: 'Tips For Keeping Your Dog Normal During the Winter',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: '',
    //         date: 'May 29, 2022',
    //         heading: 'Tips For Keeping Your Dog Normal During the Winter',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: '',
    //         date: 'May 29, 2022',
    //         heading: 'Tips For Keeping Your Dog Normal During the Winter',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: '',
    //         date: 'May 29, 2022',
    //         heading: 'Tips For Keeping Your Dog Normal During the Winter',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: '',
    //         date: 'May 29, 2022',
    //         heading: 'Tips For Keeping Your Dog Normal During the Winter',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: '',
    //         date: 'May 29, 2022',
    //         heading: 'Tips For Keeping Your Dog Normal During the Winter',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: '',
    //         date: 'May 29, 2022',
    //         heading: 'Tips For Keeping Your Dog Normal During the Winter',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: '',
    //         date: 'May 29, 2022',
    //         heading: 'Tips For Keeping Your Dog Normal During the Winter',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: '',
    //         date: 'May 29, 2022',
    //         heading: 'Your Dog Desperately Needs From You',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     },
    //     {
    //         id: '',
    //         date: 'May 29, 2022',
    //         heading: 'Your Dog Desperately Needs From You',
    //         subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

    //     }
    // ]
    const blogs:any = useAppSelector((state) => state.petGuideReducer.blogs)

    const navigate = useNavigate()

    const getClassOddEvenBlogs = (blogs: any) => {



        if ((blogs.length % 3) === 0) {
            return 'justify-content-between'
        }
        else {
            return 'justify-content-start gap-5'
        }
    }
    const navigateToDetailPage = (id: string) => {
        console.log('id :>> ', id);
        navigate(`/dds/${id}`)
    }
    return (
        <div>
            <div className="m-auto blogs_container">
                <div className={`d-flex flex-row  flex-wrap blogs_wrapper ${getClassOddEvenBlogs(blogs)}`}>
                    {
                        blogs.map((item:any) => {
                            return (<>
                                < BlogItem key={getKey()} handelClick={navigateToDetailPage} date={item.createdAt} heading={item.title} id={item.id} subHeading={item.description}></BlogItem>
                            </>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Blogs
