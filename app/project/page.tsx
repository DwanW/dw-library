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

export default function Page() {
  return (
    <Box height="auto">
      <TabsRoot defaultValue="hobby">
        <TabsList size="1">
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="hobby">Hobby</TabsTrigger>
        </TabsList>

        <Box px="4" pt="3" pb="2">
          <TabsContent value="work">
            <ProjectList list={WORK_LIST} />
          </TabsContent>

          <TabsContent value="hobby">
            <Text size="2">hobby projects I created</Text>
          </TabsContent>
        </Box>
      </TabsRoot>
    </Box>
  );
}
