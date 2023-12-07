import {
  Box,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Text,
} from "@radix-ui/themes";

export default function Page() {
  return (
    <div className="grid md:grid-cols-6 gap-12 items-center">
      <div className="md:col-span-6">
        <TabsRoot defaultValue="hobby">
          <TabsList size="1">
            <TabsTrigger value="work">Work</TabsTrigger>
            <TabsTrigger value="hobby">Hobby</TabsTrigger>
          </TabsList>

          <Box px="4" pt="3" pb="2">
            <TabsContent value="work">
              <Text size="2">work projects I am a part of</Text>
            </TabsContent>

            <TabsContent value="hobby">
              <Text size="2">hobby projects I created</Text>
            </TabsContent>
          </Box>
        </TabsRoot>
      </div>
    </div>
  );
}
