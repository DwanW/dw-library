import { Box, Flex, Section, Strong, Text } from "@radix-ui/themes";
import SectionHeader from "../components/portfolio/sectionHeader";
import {
  faUser,
  faWrench,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import SkillsWidget from "../components/portfolio/skillsWidget";
import TimelineList from "../components/portfolio/timelineList";
import EducationList from "../components/portfolio/educationList";
import Breadcrumb from "../components/breadcrumb";

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
      <Flex direction="column" gap="3">
        <Section size="1">
          <Box height="auto">
            <SectionHeader text="about me" icon={faUser} />
            <Text size="3">
              Passionate Full Stack Developer with 3 years expertise in{" "}
              <Strong>React, JavaScript, Node, and MongoDB </Strong>. Proven
              success in user engagement enhancements, AI integration, and
              project delivery. Committed to creating innovative and efficient
              web solutions.
            </Text>
          </Box>
        </Section>
        <Section size="1">
          <Box height="auto">
            <SectionHeader text="skills" icon={faWrench} />
            <SkillsWidget />
          </Box>
        </Section>
        <Section size="1">
          <Box height="auto">
            <SectionHeader text="work" icon={faBriefcase} />
            <TimelineList />
          </Box>
        </Section>
        <Section size="1">
          <Box height="auto">
            <SectionHeader text="education" icon={faGraduationCap} />
            <EducationList />
          </Box>
        </Section>
      </Flex>
    </>
  );
}
