import React, {  ReactNode } from 'react'
/* small - 18px, medium - 20px, large - 22px */
type FontSize = "small" | "medium" | "large"

interface Properties {
    fontSize: FontSize,
    children: ReactNode,
    className?: string
}
const ButtonText = ({ fontSize, children, className }: Properties) => {

    const getFontSize = (fontSize: FontSize) => {
        switch (fontSize) {
            case 'small':
                return '18px'
            case 'medium':
                return '20px'
            case 'large':
                return '22px'


        }
    }

    return (
        <span className={className} style={{ fontSize: getFontSize(fontSize) }}>{children}</span>
    )
}

export default ButtonText