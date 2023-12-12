import {
  Box,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Text,
} from "@radix-ui/themes";
import ProjectList from "../components/projectList";

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
            <ProjectList />
          </TabsContent>

          <TabsContent value="hobby">
            <Text size="2">hobby projects I created</Text>
          </TabsContent>
        </Box>
      </TabsRoot>
    </Box>
  );
}
