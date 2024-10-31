import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

type Props = {
  app: {
    title: String;
    subtitle: String;
    logo: JSX.Element;
    url: string;
  };
};

export default function PlatFormListItem({ app }: Props) {
  return (
    <Link href={app.url}>
      <Box className="relative py-4 border-b border-gray-500 transition-all duration-300 bg-[#111113] hover:bg-[#1e1e22]">
        <Box position="absolute" width="48px" height="48px">
          {app.logo}
        </Box>
        <Flex ml="9" direction="column" className="">
          <Text weight="bold" color="jade">
            {app.title}
          </Text>
          <Text color="gray" size="2">
            {app.subtitle}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
}
