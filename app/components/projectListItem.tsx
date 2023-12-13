"use client";

import { Box, Flex, Text } from "@radix-ui/themes";

type Props = {
  project: {
    title: String;
    description: String;
    badges: JSX.Element;
  };
};

export default function ProjectListItem({ project }: Props) {
  return (
    <Box className="relative pt-4 px-1 h-32">
      <Flex direction="column" className="h-full">
        <Text weight="bold" color="gold">
          {project.title}
        </Text>
        <Box mt="1">
          <Text color="gray" size="2">
            {project.description}
          </Text>
        </Box>
        {project.badges}
      </Flex>
    </Box>
  );
}
