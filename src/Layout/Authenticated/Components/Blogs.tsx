import { useNavigate } from 'react-router-dom'
import BlogItem from '../../../components/BlogItem'
const Blogs = () => {

    const blogs = [
        {
            id: 'z',
            date: 'May 29, 2022',
            heading: 'Your Dog Desperately Needs From You',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: 's',
            date: 'May 29, 2022',
            heading: 'Tips For Keeping Your Dog Normal During the Winter',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: 's',
            date: 'May 29, 2022',
            heading: 'Tips For Keeping Your Dog Normal During the Winter',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: 'd',
            date: 'May 29, 2022',
            heading: 'Tips For Keeping Your Dog Normal During the Winter',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: 's',
            date: 'May 29, 2022',
            heading: 'Tips For Keeping Your Dog Normal During the Winter',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: '',
            date: 'May 29, 2022',
            heading: 'Tips For Keeping Your Dog Normal During the Winter',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: '',
            date: 'May 29, 2022',
            heading: 'Tips For Keeping Your Dog Normal During the Winter',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: '',
            date: 'May 29, 2022',
            heading: 'Tips For Keeping Your Dog Normal During the Winter',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: '',
            date: 'May 29, 2022',
            heading: 'Tips For Keeping Your Dog Normal During the Winter',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: '',
            date: 'May 29, 2022',
            heading: 'Tips For Keeping Your Dog Normal During the Winter',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: '',
            date: 'May 29, 2022',
            heading: 'Tips For Keeping Your Dog Normal During the Winter',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: '',
            date: 'May 29, 2022',
            heading: 'Tips For Keeping Your Dog Normal During the Winter',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: '',
            date: 'May 29, 2022',
            heading: 'Tips For Keeping Your Dog Normal During the Winter',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: '',
            date: 'May 29, 2022',
            heading: 'Your Dog Desperately Needs From You',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        },
        {
            id: '',
            date: 'May 29, 2022',
            heading: 'Your Dog Desperately Needs From You',
            subHeading: 'Cat Backpack Bubble Bag, Pet Space Bag Hiking Dog'

        }
    ]
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
                        blogs.map((item) => {
                            return (<>
                                <BlogItem handelClick={navigateToDetailPage} date={item.date} heading={item.heading} id={item.id} subHeading={item.subHeading}></BlogItem>
                            </>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Blogs
