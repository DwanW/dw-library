import Image from "next/image";

import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { TypeText } from "./components/portfolio/typewriter";
import Navigation from "./components/portfolio/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <Grid
        columns={{
          initial: "1",
          xs: "2",
        }}
        gap={{
          initial: "2",
          xs: "9",
        }}
        py={{
          initial: "0",
          xs: "9",
        }}
      >
        <Grid
          columns={{
            initial: "2",
            xs: "3",
          }}
          gap="3"
          my={{
            initial: "0",
            xs: "8",
          }}
        >
          <div className="relative h-32 sm:h-40 col-span-2 sm:col-span-3">
            <Image
              alt="image1"
              src="/1.jpg"
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-64 sm:h-80 sm:mb-0 col-span-1">
            <Image
              alt="image2"
              src="/2.jpg"
              fill
              priority
              className="rounded-lg object-cover object-[-16px] sm:object-center"
            />
          </div>
          <div className="relative h-64 sm:h-80 sm:mb-0 col-span-1 sm:col-span-2">
            <Image
              alt="image2"
              src="/3.jpg"
              fill
              priority
              className="rounded-lg object-cover object-[-16px] sm:object-center"
            />
          </div>
        </Grid>
        <Flex
          direction="column"
          gap="3"
          pt={{
            initial: "2",
            xs: "0",
          }}
          pb={{
            initial: "9",
            xs: "0",
          }}
          my={{
            initial: "0",
            xs: "8",
          }}
          justify="center"
        >
          <Box height="6">
            <Text size="6" weight="bold">
              <TypeText text="Greetings, I'm Dwan" />
            </Text>
          </Box>
          <Box>
            <Text size="2">
              I&apos;m a passionate{" "}
              <Text weight="bold" color="tomato">
                Full Stack developer
              </Text>{" "}
              with a strong focus on creating{" "}
              <Text weight="bold" color="green">
                software applications
              </Text>
              . I enjoy tackling complex challenges and coming up with
              innovative solutions. Equipped with expertise in the latest web
              technologies, my goal is to{" "}
              <Text weight="bold" color="violet">
                help organizations succeed with effective digital solutions
              </Text>
              .
            </Text>
          </Box>
        </Flex>
      </Grid>
    </>
  );
}
