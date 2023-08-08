import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        // onClick: {
                        //     enable: true,
                        //     mode: "push",
                        // },
                        // onHover: {
                        //     enable: true,
                        //     mode: "repulse",
                        // },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#46413b",
                    },
                    links: {
                        color: "#b38867",
                        distance: 160,
                        enable: true,
                        opacity: 0.3,
                        width: 1.4,
                    },
                    move: {
                        direction: "top",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1200,
                        },
                        value: 400,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.2, max: 1 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};