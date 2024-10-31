import { Badge, Box, Flex } from "@radix-ui/themes";
import ProjectList from "../components/portfolio/projectList";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Breadcrumb from "../components/breadcrumb";

const LIST = [
  {
    path: "/project/skip",
    title: "SkipTheDepot",
    description: "The Bottle Depot That Comes To You",
    logo: (
      <Image
        alt="logo"
        src="/project/skip.png"
        width={176}
        height={176}
        priority
        className="object-cover block w-full h-44"
      />
    ),
    badges: (
      <Flex gap="2" className="mt-auto" justify="between" align="center">
        <Flex gap="2">
          <Badge color="green">Custom</Badge>
        </Flex>
        <Box display="inline">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </Box>
      </Flex>
    ),
  },
  {
    path: "/project/dawgs",
    title: "Okotoks Dawgs",
    description: "Okotoks Dawgs Official Website",
    logo: (
      <Image
        alt="logo"
        src="/project/dawgs.png"
        width={176}
        height={176}
        priority
        className="object-cover block w-full h-44"
      />
    ),
    badges: (
      <Flex gap="2" className="mt-auto" justify="between" align="center">
        <Flex gap="2">
          <Badge color="green">Custom</Badge>
        </Flex>
        <Box display="inline">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </Box>
      </Flex>
    ),
  },
  {
    path: "/project/aichat",
    title: "AI Chat",
    description: "Cross platform AI chat service",
    logo: (
      <Image
        alt="logo"
        src="/project/chatbot.png"
        priority
        width={176}
        height={176}
        className="object-cover block w-full h-44"
      />
    ),
    badges: (
      <Flex gap="2" className="mt-auto" justify="between" align="center">
        <Flex gap="2">
          <Badge color="green">Custom</Badge>
        </Flex>
        <Box display="inline">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </Box>
      </Flex>
    ),
  },
  {
    path: "/project/dwdev",
    title: "DW Interactive Dev",
    description: "Web Dev Consulting Business page",
    logo: (
      <Image
        alt="logo"
        src="/project/dwdev.png"
        priority
        width={176}
        height={176}
        className="object-cover block w-full h-44"
      />
    ),
    badges: (
      <Flex gap="2" className="mt-auto" justify="between" align="center">
        <Flex gap="2">
          <Badge color="green">Custom</Badge>
          <Badge color="grass">CMS</Badge>
        </Flex>
        <Box display="inline">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </Box>
      </Flex>
    ),
  },
  {
    path: "/project/tax-clinic",
    title: "Tax Clinic",
    description: "Official CRA Tax Clinic in 2021-2022",
    logo: (
      <Image
        alt="logo"
        src="/project/taxclinic.png"
        priority
        width={176}
        height={176}
        className="object-cover block w-full h-44"
      />
    ),
    badges: (
      <Flex gap="2" className="mt-auto" justify="between" align="center">
        <Flex gap="2">
          <Badge color="green">Custom</Badge>
        </Flex>
        <Box display="inline">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </Box>
      </Flex>
    ),
  },
  {
    path: "/project/super-emoji",
    title: "Super Emoji Party",
    description: "A light hearted web based board game support up to 3 players",
    logo: (
      <Image
        alt="logo"
        src="/project/emojiparty.png"
        priority
        width={176}
        height={176}
        className="object-cover block w-full h-44"
      />
    ),
    badges: (
      <Flex gap="2" className="mt-auto" justify="between" align="center">
        <Flex gap="2">
          <Badge color="green">Custom</Badge>
        </Flex>
        <Box display="inline">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </Box>
      </Flex>
    ),
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumb
        homeElement={"Home"}
        separator={<span className="mx-2">|</span>}
        activeClasses="text-blue-500"
        containerClasses="flex py-5 text-xs"
        listClasses="hover:underline font-bold"
        capitalizeLinks
      />
      <Box height="auto">
        <ProjectList list={LIST} />
      </Box>
    </>
  );
}
