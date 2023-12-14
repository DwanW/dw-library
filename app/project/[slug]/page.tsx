import { Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import Image from "next/image";

import EVLogo from "public/evolve-ed.jpg";

type Props = {
  params: {
    slug: String;
  };
};

const PROJECT_META_DATA = [
  {
    slug: "skip",
    hero: (
      <Image
        alt="evolveu logo"
        src={EVLogo}
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary: "",
    demoLink: "",
    repoLink: "",
    techStack: ["React", "Node", "JavaScript", "Python", "NoSQL", "AWS"],
  },
];

export default function Page({ params }: Props) {
  const { slug } = params;
  const projectData = PROJECT_META_DATA.find((p) => p.slug === slug);
  return (
    <Grid columns={{ initial: "8" }}>
      <Flex
        direction="column"
        gap="3"
        pt={{
          initial: "2",
          xs: "0",
        }}
        px={{
          initial: "2",
          md: "8",
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
        className="col-span-8 md:col-span-5"
      >
        <Section size="1">
          <Box>{projectData?.hero}</Box>
        </Section>
        <Section size="1">
          <Box height="5">
            <Text>details/impact summary</Text>
          </Box>
        </Section>
      </Flex>
      <Flex
        direction="column"
        gap="3"
        pt={{
          initial: "2",
          xs: "0",
        }}
        px={{
          initial: "2",
          md: "8",
        }}
        pb={{
          initial: "9",
          xs: "0",
        }}
        my={{
          initial: "0",
          xs: "8",
        }}
        className="col-span-8 md:col-span-3 md:border-l md:border-l-gray-600"
      >
        <Section size="1">
          <Text size="9" weight="bold">
            Title
          </Text>
        </Section>
        <Section size="1">
          <Box height="5">
            <Text>links icon button here</Text>
          </Box>
        </Section>
        <Section size="1">
          <Box height="5">
            <Text>tech stack list</Text>
          </Box>
        </Section>
      </Flex>
    </Grid>
  );
}
