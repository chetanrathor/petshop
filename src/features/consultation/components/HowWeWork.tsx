import Image from '../../../components/Image'

const HowWeWork = () => {





    const howWeWork = [
        {
            heading: 'You book an appointment',
            subTitle: 'When you book an appointment by giving some details about the problem your furry friend is facing we setup a meeting for you with a vet. We only have verified and certified vets.',
            icon: {
                src: 'howWeWork1.png',
                height: '47px',
                width: '47px',

            },
            background: '#F2EADF'
        },
        {
            heading: 'You talk to a vet',
            subTitle: 'We set up a video call for you with a vet where you can show and describe you issue(s) to our certified vet where he provides you solutions and medicines.',
            icon: {
                src: 'howWeWork2.png',
                height: '53px',
                width: '35px',

            },
            background: '#E7EDDC'

        },
        {
            heading: `What if issue can't resolved?`,
            subTitle: `If the issue can't be resolved online or there is need of a vet physically we provide you details of a certified vet around you who can help you.`,
            icon: {
                src: 'howWeWork3.png',
                height: '37px',
                width: '58px',

            },
            background: '#FCF2DD'

        },
        {
            heading: `Free follow-up`,
            subTitle: `Get a free follow-up call with your doctor up to one week after your consultation.`,
            icon: {
                src: 'howWeWork4.png',
                height: '55px',
                width: '41px',

            },
            background: '#E1EDF9'

        }
    ]

    

    return (
        <>
            <div className="d-flex flex-row justify-content-between mt-5 flex-wrap m-auto mw-1264 " >


                {
                    howWeWork.map((item) => {
                        return (
                            <div className={`d-flex flex-column align-items-center p-4  col-3 rounded gap-3 `} style={{ backgroundColor: item.background, maxWidth: '290px' }}>
                                <div className="d-flex flex-column">
                                    <Image alt='' className='m-auto' height={item.icon.height} width={item.icon.width} isPublicImage path={item.icon.src} ></Image>
                                    <div className="my-2 cart_heading text-center">
                                        {item.heading}
                                    </div>
                                    <div className="my-2 how-we-work-item_subheading text-center">
                                        {item.subTitle}
                                    </div>


                                </div>
                            </div>
                        )
                    })
                }




            </div>
        </>

    )
}

export default HowWeWork