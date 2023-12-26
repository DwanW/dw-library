import { Badge, Box, Flex } from "@radix-ui/themes";
import ProjectList from "../components/portfolio/projectList";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import SkipHero from "public/project/skip.png";
import DawgsHero from "public/project/dawgs.png";
import ChatbotHero from "public/project/chatbot.png";
import TaxClinicHero from "public/project/taxclinic.png";
import DwanDevHero from "public/project/dwdev.png";
import EmojiHero from "public/project/emojiparty.png";
import Breadcrumb from "../components/breadcrumb";

const LIST = [
  {
    path: "/project/skip",
    title: "SkipTheDepot",
    description: "The Bottle Depot That Comes To You",
    logo: (
      <Image
        alt="logo"
        src={SkipHero}
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
        src={DawgsHero}
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
        src={ChatbotHero}
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
    path: "/project/dwdev",
    title: "DW Interactive Dev",
    description: "Web Dev Consulting Business page",
    logo: (
      <Image
        alt="logo"
        src={DwanDevHero}
        priority
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
        src={TaxClinicHero}
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
    path: "/project/super-emoji",
    title: "Super Emoji Party",
    description: "A light hearted web based board game support up to 3 players",
    logo: (
      <Image
        alt="logo"
        src={EmojiHero}
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
