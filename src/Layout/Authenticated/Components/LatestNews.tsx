import { useNavigate } from 'react-router-dom'
import BlogItem from '../../../components/BlogItem'
import MediumHeading from '../../../components/MediumHeading'

const LatestNews = () => {
  const petGuids = [
    {
      id: '',
      date: 'May 29, 2022',
      heading: 'Your Dog Desperately Needs From You',
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

    }
  ]
  const navigate = useNavigate()
  return (
    <div>
      <div className="p-3 mt-5 mb-5 latest_news_container">
        <div className="lates_news_wrapper">
          <MediumHeading heading='Our Pet Guide'></MediumHeading>
          <div className="d-flex flex-row justify-content-between flex-wrap">

            {
              petGuids.map((item) => {
                return (<>
                  <BlogItem handelClick={() => {
                    navigate('/petguide/:id')
                  }} date={item.date} heading={item.heading} subHeading={item.subHeading} id={item.id}></BlogItem>

                </>)
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
