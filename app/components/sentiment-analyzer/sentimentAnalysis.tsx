"use client";
import { useState } from "react";
import { Button, Flex, Text, TextField, Spinner } from "@radix-ui/themes";

type SentimentResult = {
  label: string;
  confidence: number;
};

const SentimentAnalysis: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<SentimentResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      direction="column"
      gap="4"
      align="center"
      className="sentiment-analysis-widget"
    >
      <Text size="3" weight="bold">
        Enter text to analyze sentiment
      </Text>
      <Text size="2" color="gray">
        Note: The server might take up to 50 seconds or more to spin up.
      </Text>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <Flex direction="column" gap="3">
          <TextField.Root
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your text here..."
            required
            className="w-full"
          />

          <Button variant="solid" type="submit" disabled={loading}>
            {loading ? (
              <Flex align="center" gap="2">
                <Spinner />
                <Text>Analyzing...</Text>
              </Flex>
            ) : (
              "Analyze Sentiment"
            )}
          </Button>
        </Flex>
      </form>
      {loading && (
        <Text size="2" color="gray" className="mt-2">
          Processing, please wait...
        </Text>
      )}
      {result && result.confidence && !loading && (
        <Flex
          direction="column"
          gap="2"
          align="start"
          className="result mt-4 p-4 border rounded-md shadow w-full max-w-md"
        >
          <Text size="3" weight="bold">
            Result:
          </Text>
          <Text size="2">Label: {result.label}</Text>
          <Text size="2">Confidence: {result.confidence.toFixed(2)}</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default SentimentAnalysis;
