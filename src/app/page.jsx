"use client";
import { useEffect, useRef, useCallback } from "react";
import { Box,Heading, Flex, Center, Image } from "@chakra-ui/react";
import Typed from "typed.js";
import SocialIcons from "../components/SocialIcons";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "../particlesjs.json";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  const typedTextRef = useRef(null);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const options = {
      strings: ["Graduate Student", "Web Developer", "Quality Assuarance Engineer", "Coder", "Tech Enthusiast"],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Center>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleConfig}
          position="absolute"
          zIndex={0}
        />
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
          position="absolute"
          top="45vh"
          zIndex={1}
        >
         <RevealWrapper className="load-hidden" delay={300}>
          <Box
            width={["10rem", "12rem", "15rem"]} // Set circle sizes for different screen widths
            height={["10rem", "12rem", "15rem"]} // Ensure circle remains 1:1 aspect ratio
            borderRadius="50%" // Circular shape
            overflow="hidden" // Hide overflow
            marginTop={["6rem", "8rem", "10rem"]} // Increase top margin to move the circle down
            marginBottom={["1rem", "1rem", "1.5rem"]} // Adjust bottom margin spacing
            display="flex" // Flexbox for centering content
            alignItems="center" // Vertically center the image inside the circle
            justifyContent="center" // Horizontally center the image inside the circle
            backgroundColor="blueTheme.navBg" // Background color (if needed)
          >
            <Image
              src="/ar-profile-transformed.jpg"
              alt="profile-image"
              objectFit="cover" // Ensure image covers the circle without distortion
              width="100%" // Make image fill the circle
              height="100%" // Ensure image fills the circle
            />
          </Box>
        </RevealWrapper>


          <RevealWrapper className="load-hidden" delay={400}>
            <Heading
              size="lg"
              color="blueTheme.navLinkActive"
              fontFamily="Righteous"
            >
              Hi, my name is
            </Heading>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={500}>
            <Flex
              alignItems="center"
              my="1rem"
              flexDirection={["column", "column", "row"]}
            >
              <Heading
                fontFamily="Black Ops One"
                fontSize={["2.5rem", "3.7rem"]}
              >
                Snehitha
              </Heading>

              <Heading
                fontFamily="Black Ops One"
                fontSize={["2.5rem", "3.7rem"]}
                ml={[null, "1rem"]}
              >
                Pothina
              </Heading>
            </Flex>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={600}>
            <Heading my={3} size="lg" fontFamily="Righteous">
              I &apos;m a <span className="typed-text" ref={typedTextRef}></span>
            </Heading>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={700}>
            <SocialIcons />
          </RevealWrapper>
        </Flex>
      </Center>
    </>
  );
}
