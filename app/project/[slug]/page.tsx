import { Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import Image from "next/image";

import SkipHero from "public/project/skip.png";
import DawgsHero from "public/project/dawgs.png";
import ChatbotHero from "public/project/chatbot.png";
import TaxClinicHero from "public/project/taxclinic.png";
import DwanDevHero from "public/project/dwdev.png";
import EmojiHero from "public/project/emojiparty.png";

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
        alt="logo"
        src={SkipHero}
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary: "",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.skipthedepot.app&hl=en_US",
    repoLink: "",
    techStack: ["React", "Node", "JavaScript", "Python", "NoSQL", "AWS"],
  },
  {
    slug: "dawgs",
    hero: (
      <Image
        alt="logo"
        src={DawgsHero}
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary: "",
    demoLink: "https://dawgsbaseball.ca/",
    repoLink: "",
    techStack: ["React", "Node", "JavaScript", "Python", "NoSQL", "AWS"],
  },
  {
    slug: "aichat",
    hero: (
      <Image
        alt="logo"
        src={ChatbotHero}
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary: "",
    demoLink: "",
    repoLink: "",
    techStack: ["React", "Node", "JavaScript", "Python", "NoSQL", "AWS"],
  },
  {
    slug: "dwdev",
    hero: (
      <Image
        alt="logo"
        src={DwanDevHero}
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary: "",
    demoLink: "https://dwdev.netlify.app/",
    repoLink: "",
    techStack: ["React", "Node", "JavaScript", "Python", "NoSQL", "AWS"],
  },
  {
    slug: "tax-clinic",
    hero: (
      <Image
        alt="logo"
        src={TaxClinicHero}
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary: "",
    demoLink: "https://shining-light.netlify.app/",
    repoLink: "",
    techStack: ["React", "Node", "JavaScript", "Python", "NoSQL", "AWS"],
  },
  {
    slug: "super-emoji",
    hero: (
      <Image
        alt="logo"
        src={EmojiHero}
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary: "",
    demoLink: "https://emoji-party.netlify.app/",
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
