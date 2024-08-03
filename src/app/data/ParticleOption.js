export const snowOptions = {
    key: "snow",
    name: "Snow",
    particles: {
        number: {
            value: 400,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#1e1e1e",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 1,
        },
        size: {
            value: 10,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            straight: true,
        },
        wobble: {
            enable: true,
            distance: 10,
            speed: 10,
        },
        zIndex: {
            value: {
                min: 0,
                max: 100,
            },
            opacityRate: 10,
            sizeRate: 10,
            velocityRate: 10,
        },
    },
    background: {
        color: "#fcf6f4",
    },
}

export const bubbleOptions = {
    key: "reactBubbles",
    name: "React Bubbles",
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "repulse",
            },
            onHover: {
                enable: true,
                mode: "bubble",
            },
        },
        modes: {
            bubble: {
                distance: 250,
                duration: 2,
                opacity: 0,
                size: 0,
            },
            connect: {
                distance: 80,
                links: {
                    opacity: 0.5,
                },
                radius: 60,
            },
            grab: {
                distance: 180,
                links: {
                    opacity: 0.35,
                },
            },
            push: {
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
            repulse: {
                distance: 200,
                duration: 4,
            },
            slow: {
                factor: 1,
                radius: 0,
            },
        },
    },
    particles: {
        color: {
            value: "#1e1e1e",
        },
        collisions: {
            enable: true,
        },
        move: {
            attract: {
                enable: false,
                rotate: {
                    x: 3000,
                    y: 3000,
                },
            },
            direction: "top",
            enable: true,
            speed: {
                min: 0.1,
                max: 1,
            },
        },
        number: {
            value: 160,
        },
        opacity: {
            animation: {
                enable: true,
                speed: 1,
                sync: false,
            },
            value: {
                min: 0.1,
                max: 0.5,
            },
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {
                min: 1,
                max: 3,
            },
        },
    },
    pauseOnBlur: true,
    background: {
        color: "#fcf6f4",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
    },
};


export const shapesOptions = {
    key: "randomShapes",
    name: "Random Shapes",
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "bubble",
            },
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
        },
    },
    particles: {
        color: {
            value: "#000000",
        },
        stroke: {
            color: {
                value: "#ff0000",
            },
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
        },
        number: {
            density: {
                enable: true,
            },
            value: 20,
        },
        opacity: {
            value: 0.5,
        },
        rotate: {
            animation: {
                enable: true,
                speed: 5,
                sync: false,
            },
            direction: "random",
            value: {
                min: 0,
                max: 360,
            },
        },
        shape: {
            options: {
                image: [
                    {
                        name: "apple",
                    },
                    {
                        name: "avocado",
                    },
                    {
                        name: "banana",
                    },
                    {
                        name: "berries",
                    },
                    {
                        name: "cherry",
                    },
                    {
                        name: "grapes",
                    },
                    {
                        name: "lemon",
                    },
                ],
                arrow: {
                    heightFactor: {
                        min: 0.3,
                        max: 0.8,
                    },
                    headWidthFactor: {
                        min: 0.3,
                        max: 0.8,
                    },
                    bodyHeightFactor: {
                        min: 0.3,
                        max: 0.8,
                    },
                },
                cog: {
                    holeRadius: 44,
                    innerRadius: 72,
                    innerTaper: 35,
                    notches: 7,
                    outerTaper: 50,
                },
                emoji: {
                    value: "🌈",
                },
                text: {
                    value: "pippo\npluto",
                },
                path: [
                    {
                        segments: [
                            {
                                type: "line",
                                values: [
                                    {
                                        x: -0.5,
                                        y: -0.5,
                                    },
                                ],
                            },
                            {
                                type: "bezier",
                                values: [
                                    {
                                        x: -0.5,
                                        y: 0.5,
                                    },
                                    {
                                        x: 1,
                                        y: 1,
                                    },
                                    {
                                        x: 1,
                                        y: 0.5,
                                    },
                                    {
                                        x: 1,
                                        y: -0.5,
                                    },
                                ],
                            },
                            {
                                type: "quadratic",
                                values: [
                                    {
                                        x: 0.5,
                                        y: 0.5,
                                    },
                                    {
                                        x: 0.5,
                                        y: -0.5,
                                    },
                                    {
                                        x: -0.5,
                                        y: 0.5,
                                    },
                                ],
                            },
                            {
                                type: "line",
                                values: [
                                    {
                                        x: 0.5,
                                        y: -0.5,
                                    },
                                ],
                            },
                        ],
                        half: false,
                    },
                    {
                        segments: [
                            {
                                type: "line",
                                values: [
                                    {
                                        x: -1,
                                        y: -1,
                                    },
                                ],
                            },
                            {
                                type: "bezier",
                                values: [
                                    {
                                        x: -1,
                                        y: 1,
                                    },
                                    {
                                        x: 1,
                                        y: 1,
                                    },
                                    {
                                        x: 0.5,
                                        y: 1,
                                    },
                                    {
                                        x: -0.5,
                                        y: 1,
                                    },
                                ],
                            },
                            {
                                type: "quadratic",
                                values: [
                                    {
                                        x: 1,
                                        y: 1,
                                    },
                                    {
                                        x: 1,
                                        y: -1,
                                    },
                                    {
                                        x: -1,
                                        y: 1,
                                    },
                                ],
                            },
                            {
                                type: "line",
                                values: [
                                    {
                                        x: 1,
                                        y: -1,
                                    },
                                ],
                            },
                        ],
                        half: false,
                    },
                ],
                "rounded-polygon": [
                    {
                        radius: { min: 0, max: 10 },
                        sides: { min: 3, max: 8 },
                    },
                ],
                "rounded-rect": {
                    radius: { min: 5, max: 15 },
                },
                spiral: {
                    innerRadius: 0.5,
                    lineSpacing: 0.5,
                    fill: false,
                    close: false,
                },
                spades: {
                    particles: {
                        color: {
                            value: "#000000",
                        },
                    },
                },
                hearts: {
                    particles: {
                        color: {
                            value: "#ff0000",
                        },
                    },
                },
                diamonds: {
                    particles: {
                        color: {
                            value: "#ff0000",
                        },
                    },
                },
                clubs: {
                    particles: {
                        color: {
                            value: "#000000",
                        },
                    },
                },
            },
            type: "random",
        },
        size: {
            value: 16,
        },
    },
    background: {
        color: "#fcf6f4",
    },
    preload: [
        {
            src: "https://particles.js.org/images/fruits/apple.png",
            name: "apple",
            width: 32,
            height: 32,
        },
        {
            src: "https://particles.js.org/images/fruits/avocado.png",
            name: "avocado",
            width: 32,
            height: 32,
        },
        {
            src: "https://particles.js.org/images/fruits/banana.png",
            name: "banana",
            width: 32,
            height: 32,
        },
        {
            src: "https://particles.js.org/images/fruits/berries.png",
            name: "berries",
            width: 32,
            height: 32,
        },
        {
            src: "https://particles.js.org/images/fruits/cherry.png",
            name: "cherry",
            width: 32,
            height: 32,
        },
        {
            src: "https://particles.js.org/images/fruits/grapes.png",
            name: "grapes",
            width: 32,
            height: 32,
        },
        {
            src: "https://particles.js.org/images/fruits/lemon.png",
            name: "lemon",
            width: 32,
            height: 32,
        },
    ],
};


export const skyOptions = {
    key: "reactNightSky",
    name: "React Night Sky",
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            push: {
                quantity: 1000,
            },
        },
    },
    particles: {
        color: {
            value: "#FFF",
        },
        links: {
            blink: false,
            color: {
                value: "#fff",
            },
            consent: false,
            distance: 150,
            enable: true,
            opacity: 0.5,
            shadow: {
                blur: 0,
                color: {
                    value: "lime",
                },
                enable: false,
            },
            width: 1,
        },
        move: {
            attract: {
                enable: false,
                rotate: {
                    x: 3000,
                    y: 3000,
                },
            },
            direction: "right",
            enable: true,
            outModes: "bounce",
            speed: 0.5,
        },
        collisions: {
            enable: true,
        },
        number: {
            density: {
                enable: true,
            },
            value: 60,
        },
        opacity: {
            animation: {
                enable: true,
                speed: 1,
                sync: false,
            },
            value: {
                min: 0.05,
                max: 0.5,
            },
        },
        shape: {
            type: "circle",
        },
        size: {
            value: 1,
        },
    },
    pauseOnBlur: true,
    background: {
        color: "#0d47a1",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
    },
};

