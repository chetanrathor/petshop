
const AreYouVetBanner = () => {
    const dots = [
        {
            path: 'AYVDot1.png',
            height: '13px',
            width: '13px',
            class: 'dot1'

        },
        {
            path: 'AYVDot2.png',
            height: '8px',
            width: '8px',
            class: 'dot2'

        },
        {
            path: 'AYVDot2.png',
            height: '8px',
            width: '8px',
            class: 'dot3'

        },
        {
            path: 'AYVDot1.png',
            height: '13px',
            width: '13px',
            class: 'dot4'

        }
    ]
    return (
        <div>
            <div className=" mt-5 banner__container">
                <div className="p-3 d-flex flex-column justify-content-center align-items-center banner__wrapper">
                    {/* <div className=" dot_container">

                        {
                            dots.map((item) => {
                                return (
                                    <>
                                        <img src={item.path} className={item.class} height={item.height} width={item.width} alt="" />

                                    </>
                                )
                            })
                        }

                    </div> */}
                    <h1 className='AYV_heading'>Are you a vet?</h1>
                    <p className='mt-2 sub_headings'>
                        We would love to work with you. Send us a message and we’ll be in touch with you <br /> right away to onboard you to our platform.
                    </p>
                    {/* <ButtonComponent bgColor=''  isPrimary={true}></ButtonComponent> */}
                </div>
            </div>
        </div>
    )
}

export default AreYouVetBanner
