import ServicesCart from "../../../components/ServicesCart"

const ServicesOffered = () => {

    const servicesCarts = [
        {
            bgClass: 'services-cart-bg-1',
            heading: 'Trust & Safety',
            iconSource: 'service1.png',
            subheading: 'Velit euismod pellentes',
            iconWidth: '40px',
            iconHeight: '32px'
        },
        {
            bgClass: 'services-cart-bg-2',
            heading: 'Discounts',
            iconSource: 'service2.png',
            subheading: 'Velit euismod pellentes',
            iconWidth: '38px',
            iconHeight: '38px',
        },
        {
            bgClass: 'services-cart-bg-3',
            heading: 'Support',
            iconSource: 'service3.png',
            subheading: 'Velit euismod pellentes',
            iconWidth: '28px',
            iconHeight: '32px',
        },
        {
            bgClass: 'services-cart-bg-4',
            heading: 'Guarantee',
            iconSource: 'service4.png',
            subheading: 'Velit euismod pellentes',
            iconWidth: '30px',
            iconHeight: '32px',
        }
    ]
    return (

        <div className="p-3 mt-5 servicesOffered__container">
            <div className="d-flex flex-column flex-md-row gap  m-auto justify-content-between servicesOffered__wrapper">
                {
                    servicesCarts.map((item) => {
                        return (
                            <>
                                <ServicesCart iconHeight={item.iconHeight} iconWidth={item.iconWidth} bgClass={item.bgClass} heading={item.heading} iconSource={item.iconSource} subheading={item.subheading}></ServicesCart>

                            </>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default ServicesOffered
