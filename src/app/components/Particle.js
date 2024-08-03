"use client";


import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { bubbleOptions, fireOptions, shapesOptions, skyOptions, snowOptions } from "../data/ParticleOption";
import { Tooltip as ReactTooltip } from "react-tooltip";


const Particle = () => {
    const [init, setInit] = useState(false);

    const [effect, setEffect] = useState("");

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // const options = useMemo(
    //     () => (
    //         { snowOptions, }
    //     ),
    //     []
    // );
    const particlesLoaded = (container) => {
        console.log(container);
    };


    const getOptions = () => {
        switch (effect) {
            case "snow":
                return snowOptions;
            case "bubble":
                return bubbleOptions;
            case "shapes":
                return shapesOptions;
            case "sky":
                return skyOptions;
            default:
                return;
        }
    }

    return (
        <div className="absolute w-screen top-0 flex flex-col items-center justify-center h-screen">
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={getOptions()}
                className="absolute -z-10"
            />

            <div className={`${effect == "sky" ? 'text-white' : 'text-black'}`}>
                <div className="text-4xl  text-center mb-8">
                    <h1>Particles</h1>
                </div>
                <p className="text-xl  mb-8">A lightweight component to easily create interactive particles animations</p>

                <p className="text-xl  mb-10">Explore different particle effects by selecting one of the buttons below. Each button activates a unique visual effect:
                </p>
            </div >


            <div className="flex flex-col md:flex-row gap-4">
                <button data-tooltip-id="snow" className="px-4 py-2 bg-orange-600 text-white rounded-md" onClick={() => setEffect("snow")}>Snow</button>
                <button data-tooltip-id="bubble" className="px-4 py-2 bg-orange-600 text-white rounded-md" onClick={() => setEffect("bubble")}>Bubbble</button>
                <button data-tooltip-id="shapes" className="px-4 py-2 bg-orange-600 text-white rounded-md" onClick={() => setEffect("shapes")}>Shapes</button>
                <button data-tooltip-id="sky" className="px-4 py-2 bg-orange-600 text-white rounded-md" onClick={() => setEffect("sky")}>Night Sky</button>
            </div>
            <div>
                <ReactTooltip
                    id="snow"
                    place="left"
                    content="Creates a snowfall effect with particles gently drifting downward"
                    variant="info"
                    style={{
                        padding: '8px',
                        width: '10%'
                    }}
                />
                <ReactTooltip
                    id="bubble"
                    place="top"
                    content="Displays floating bubbles that move and pop on the screen"
                    variant="info"
                    style={{
                        padding: '8px',
                        width: '10%'
                    }}
                />
                <ReactTooltip
                    id="shapes"
                    place="bottom"
                    content="Showcases various shapes dancing across the screen with dynamic animations."
                    variant="info"
                    style={{
                        padding: '8px',
                        width: '10%'
                    }}
                />
                <ReactTooltip
                    id="sky"
                    place="right"
                    content="Enhance your view with captivating night sky effects."
                    variant="info"
                    style={{
                        padding: '8px',
                        width: '10%'
                    }}
                />

            </div>

        </div >
    );
}

export default Particle;
