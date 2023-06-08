import React from 'react'
import './Blogs.css'
import { blogs } from '.'
import BlogItem from '../../../../Shared/Components/BlogItem/BlogItem'
import { useNavigate } from 'react-router-dom'
const Blogs = () => {
const navigate = useNavigate()

    const getClassOddEvenBlogs = (blogs:any)=>{


           
        if((blogs.length%3) === 0){
            return 'justify-content-between'
        }
        else {
            return 'justify-content-start gap-5'
        }
    }
    const navigateToDetailPage = (id:string)=>{
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
                                <BlogItem  handelClick={navigateToDetailPage}  date={item.date} heading={item.heading} id={item.id} subHeading={item.subHeading}></BlogItem>
                            </>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Blogs
