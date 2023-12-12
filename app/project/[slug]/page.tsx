import { Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
type Props = {
  params: {
    slug: String;
  };
};

export default function Page({ params }: Props) {
  console.log(params.slug);
  return (
    <Grid columns={{ initial: "1", xs: "2" }}>
      <Flex direction="column" gap="3" className="sm:col-span-3">
        <Section size="1">
          <Box height="5">
            <Text>hero picture</Text>
          </Box>
        </Section>
        <Section size="1">
          <Box height="5">
            <Text>details summary</Text>
          </Box>
        </Section>
      </Flex>
      <Flex direction="column" gap="3" className="sm:col-span-1">
        <Section size="1">
          <Box height="5">
            <Text>links</Text>
          </Box>
        </Section>
        <Section size="1">
          <Box height="5">
            <Text>tech stack</Text>
          </Box>
        </Section>
      </Flex>
    </Grid>
  );
}
