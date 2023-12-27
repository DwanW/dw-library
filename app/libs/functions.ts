"use server";
export const getPolls = async () => {
  try {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}/polls`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch polls");
    }
    return res.json();
  } catch (e) {
    console.log("Error Loading polls: ", e);
  }
};

export const createTag = async (newTag: { name: String }) => {
  try {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}/tag`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTag),
    });
    if (!res.ok) {
      throw new Error("failed to create tag");
    }
    return res.json();
  } catch (e) {
    console.log("Error creating tag: ", e);
  }
};
