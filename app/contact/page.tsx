import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import Link from "next/link";
import Breadcrumb from "../components/breadcrumb";

export default function Page() {
  return (
    <Grid columns={{ initial: "1" }} gap="2" className="max-w-lg mx-auto">
      <Breadcrumb
        homeElement={"Home"}
        separator={<span className="mx-2">|</span>}
        activeClasses="text-blue-500"
        containerClasses="flex py-5 text-xs"
        listClasses="hover:underline font-bold"
        capitalizeLinks
      />
      <Section size="1">
        <Box mb="2">
          <Text weight="bold">What am I up to?</Text>
        </Box>
        <Box>
          <Text size="2">
            Outside of work, I enjoy exploring how experts use data to solve
            real-life problems. Lately, I&apos;ve been intrigued by application
            of{" "}
            <Text weight="bold" color="iris">
              natural language processing
            </Text>
            . Staying up-to-date on the latest technologies is a personal
            interest of mine. I like to create repositories to test out small
            ideas and see how I can make the most of the newest tech. It&apos;s
            a great way to stay engaged and stretch the potential of the tools
            available.
          </Text>
        </Box>
      </Section>
      <Section size="1">
        <Box my="2">
          <Text weight="bold">Contact</Text>
        </Box>
        <Flex direction="row" gap="5">
          <Link href="https://www.linkedin.com/in/dwanw/" target="_blank">
            <Flex direction="row" align="center">
              <Box display="inline">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Box>
            </Flex>
          </Link>
          <Link href="https://github.com/dwanw" target="_blank">
            <Flex direction="row" align="center">
              <Box display="inline">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Section>
    </Grid>
  );
}
