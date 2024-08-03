import React from 'react'
import AnimatedCursor from "react-animated-cursor"

export const AnimeCursor = () => {
    return (
        <div>
            <AnimatedCursor
                innerSize={5}
                outerSize={30}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: 'blue',
                }}
                outerStyle={{
                    border: '3px solid blue'
                }}
                showSystemCursor={true}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                ]}
            />
        </div>
    )
}
