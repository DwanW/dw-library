import AuthButton from "@/app/components/authButton";
import { Box, Flex, Section } from "@radix-ui/themes";
import Breadcrumb from "../components/breadcrumb";
import PlatformList from "../components/portfolio/platformList";

export default function Page() {
  return (
    <>
      <Box height="auto">
        <AuthButton />
      </Box>
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
          <PlatformList />
        </Section>
      </Flex>
    </>
  );
}
