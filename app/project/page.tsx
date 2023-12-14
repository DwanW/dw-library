import {
  Badge,
  Box,
  Flex,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Text,
} from "@radix-ui/themes";
import ProjectList from "../components/projectList";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import EVLogo from "public/evolve-ed.jpg";

const WORK_LIST = [
  {
    path: "/project/skip",
    title: "Skip the Depot",
    description: "The Bottle Depot That Comes To You",
    logo: (
      <Image
        alt="evolveu logo"
        src={EVLogo}
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
    description: "Okotoks Dawgs",
    logo: (
      <Image
        alt="evolveu logo"
        src={EVLogo}
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
    path: "/project/ichor",
    title: "Ichor",
    description: "The Bottle Depot That Comes To You",
    logo: (
      <Image
        alt="evolveu logo"
        src={EVLogo}
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
    description: "The Bottle Depot That Comes To You",
    logo: (
      <Image
        alt="evolveu logo"
        src={EVLogo}
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

const HOBBY_LIST = [
  {
    path: "/project/dwdev",
    title: "DW Interactive Dev",
    description: "Web Dev Consulting Business page",
    logo: (
      <Image
        alt="evolveu logo"
        src={EVLogo}
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
        alt="evolveu logo"
        src={EVLogo}
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
    description: "A light hearted board game support up to 3 players",
    logo: (
      <Image
        alt="evolveu logo"
        src={EVLogo}
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
    <Box height="auto">
      <TabsRoot defaultValue="work">
        <TabsList size="1">
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
        </TabsList>

        <Box px="4" pt="3" pb="2">
          <TabsContent value="work">
            <ProjectList list={WORK_LIST} />
          </TabsContent>

          <TabsContent value="personal">
            <Text size="2">
              <ProjectList list={HOBBY_LIST} />
            </Text>
          </TabsContent>
        </Box>
      </TabsRoot>
    </Box>
  );
}
