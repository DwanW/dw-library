import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Section,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/app/components/breadcrumb";

type Props = {
  params: Promise<{
    slug: String;
  }>;
};

const PROJECT_META_DATA = [
  {
    slug: "skip",
    title: "SkipTheDepot",
    hero: (
      <Image
        alt="logo"
        src="/project/skip.png"
        width={384}
        height={384}
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary:
      "SkipTheDepot is a widely embraced software application in Alberta, empowering users with a convenient mobile service that simplifies recycling while concurrently supporting local community fundraising efforts. This innovative app has become a go-to platform for individuals looking to effortlessly contribute to environmental sustainability and make a positive impact on their communities. By seamlessly integrating recycling practices with a user-friendly interface, SkipTheDepot has successfully transformed the recycling experience in Alberta, fostering a sense of environmental responsibility and community engagement among its diverse user base.",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.skipthedepot.app&hl=en_US",
    repoLink: "",
    techStack: ["React", "Node", "JavaScript", "Python", "NoSQL", "AWS"],
  },
  {
    slug: "dawgs",
    title: "DawgsBaseball",
    hero: (
      <Image
        alt="logo"
        src="/project/dawgs.png"
        width={384}
        height={384}
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary:
      "Dawgs Baseball serves as the online hub for the Okotoks Dawgs, a formidable collegiate summer baseball team hailing from Okotoks, Alberta, Canada, and competing in the esteemed Western Canadian Baseball League. Boasting an impressive record of seven WCBL championships, the website caters primarily to enthusiasts eager to engage with the team. Users can conveniently book game tickets and stay updated on the dynamic game schedule, providing a centralized platform for fans to immerse themselves in the exciting world of Okotoks Dawgs baseball. With a focus on user-friendly navigation and essential information, Dawgs Baseball is the digital destination for those passionate about supporting the team and staying connected with the latest game-related updates.",
    demoLink: "https://dawgsbaseball.ca/",
    repoLink: "",
    techStack: ["React", "Gatsby", "CMS", "API"],
  },
  {
    slug: "aichat",
    title: "AI Chat",
    hero: (
      <Image
        alt="logo"
        src="/project/chatbot.png"
        width={384}
        height={384}
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary:
      "AI Chat, an API service, seamlessly connects open-source CRM, websites, emails, and Google Business, acting as a centralized hub. It leverages natural language models to automate user inquiries and service bookings, enhancing communication efficiency. Ideal for organizations aiming to streamline workflows and provide automated yet personalized interactions across various platforms.",
    demoLink: "",
    repoLink: "",
    techStack: ["OpenAI", "Python", "LangChain", "IndexDB", "FireBase", "GCP"],
  },
  {
    slug: "dwdev",
    title: "DW Interactive Dev",
    hero: (
      <Image
        alt="logo"
        src="/project/dwdev.png"
        width={384}
        height={384}
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary:
      "DW Interactive Dev is a website crafted during the early stages of my software career, serving as a platform for a software consulting service. Tailored to assist individuals and businesses, the site advertizes my specialization in building customized software applications, web apps, and website solutions",
    demoLink: "https://dwdev.netlify.app/",
    repoLink: "https://github.com/DwanW/DW-Dev",
    techStack: ["React", "Node", "JavaScript", "CMS"],
  },
  {
    slug: "tax-clinic",
    title: "Tax Clinic",
    hero: (
      <Image
        alt="logo"
        width={384}
        height={384}
        src="/project/taxclinic.png"
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary:
      "Tax Clinic is a user-friendly webpage crafted using Gatsby and stylized with Tailwind. Tailored for a government tax clinic organization, this platform is designed to assist individuals in efficiently managing their taxes. The simplicity of the interface ensures a seamless and accessible experience for users seeking professional guidance and support in handling their tax-related matters.",
    demoLink: "https://shining-light.netlify.app/",
    repoLink: "https://github.com/DwanW/tax-clinic",
    techStack: ["React", "Tailwind", "JavaScript", "Gatsby"],
  },
  {
    slug: "super-emoji",
    title: "Super Emoji Party",
    hero: (
      <Image
        alt="logo"
        src="/project/emojiparty.png"
        width={384}
        height={384}
        priority
        className="object-cover rounded-md block w-full h-96"
      />
    ),
    summary:
      "Super Emoji Party is an engaging web-based board game that leverages the boardgame.io framework, offering players a unique experience with randomly generated game boards. Each playthrough promises distinct challenges and excitement, making every game a fresh and dynamic adventure.",
    demoLink: "https://emoji-party.netlify.app/",
    repoLink: "https://github.com/DwanW/super-emoji-party",
    techStack: ["React", "CSS", "JavaScript"],
  },
];

export default async function Page(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const projectData = PROJECT_META_DATA.find((p) => p.slug === slug);
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
      <Grid columns={{ initial: "8" }}>
        <Flex
          direction="column"
          gap="3"
          pr={{
            initial: "2",
            md: "8",
          }}
          pb={{
            initial: "0",
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
            <Box>
              <Text>{projectData?.summary}</Text>
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
          my={{
            initial: "0",
            xs: "8",
          }}
          className="col-span-8 md:col-span-3 md:border-l pb-28 sm:pb-0 md:border-l-gray-600"
        >
          <Section size="1">
            <Text
              size={{
                initial: "8",
              }}
              weight="bold"
            >
              {projectData?.title}
            </Text>
          </Section>
          <Section size="1">
            {projectData?.demoLink && (
              <Box>
                <Link href={projectData?.demoLink} target="_blank">
                  <Button variant="surface">
                    <FontAwesomeIcon icon={faLink} />
                    VIEW DEMO
                  </Button>
                </Link>
              </Box>
            )}
            {projectData?.repoLink && (
              <Box mt="2">
                <Link href={projectData?.repoLink} target="_blank">
                  <Button variant="surface">
                    <FontAwesomeIcon icon={faGithub} />
                    VIEW REPO
                  </Button>
                </Link>
              </Box>
            )}
            {!projectData?.demoLink && !projectData?.repoLink && (
              <Text color="gray" size="1">
                Project not available to view
              </Text>
            )}
          </Section>
          <Section size="1">
            <Box height="5">
              {projectData?.techStack.map((t, idx) => (
                <Badge key={idx} size="2" className="m-1">
                  {t}
                </Badge>
              ))}
            </Box>
          </Section>
        </Flex>
      </Grid>
    </>
  );
}
