"use server";

type NewPoll = {
  title: String;
  description: String;
  endDate: Date;
  // isPrivate: Boolean;
  // passPhrase: String;
  tag: String | undefined;
};

export const createPoll = async (newPoll: NewPoll) => {
  try {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}/poll`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPoll),
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to create poll");
    }
    return res.json();
  } catch (e) {
    console.log("Error creating poll: ", e);
  }
};

export const getPollById = async (id: string) => {
  try {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}/poll/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch poll");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPolls = async () => {
  try {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}/poll`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch poll");
    }
    return res.json();
  } catch (e) {
    console.log("Error Loading polls: ", e);
  }
};

export const getTags = async () => {
  try {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}/tag`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch tags");
    }
    return res.json();
  } catch (e) {
    console.log("Error Loading tags: ", e);
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
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to create tag");
    }
    return res.json();
  } catch (e) {
    console.log("Error creating tag: ", e);
  }
};

type NewOption = {
  title: String;
  link: String;
  imgUrl: String;
  description: String;
  tag: String | undefined;
};

export const createOption = async (newOption: NewOption) => {
  try {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}/option`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newOption),
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to create option");
    }
    return res.json();
  } catch (e) {
    console.log("Error creating option: ", e);
  }
};

export const getOptions = async () => {
  try {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}/option`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch options");
    }
    return res.json();
  } catch (e) {
    console.log("Error Loading options: ", e);
  }
};

export const getOptionsByTag = async (tagId: string) => {
  try {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}/option/tag/${tagId}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch options");
    }
    return res.json();
  } catch (e) {
    console.log("Error Loading options: ", e);
  }
};

type NewVote = {
  email: String;
  poll: String;
  firstOption: String;
  secondOption: String | undefined;
  thirdOption: String | undefined;
};

export const createVote = async (newVote: NewVote) => {
  try {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}/vote`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newVote),
    });

    if (!res.ok) {
      throw new Error("failed to create vote");
    }
    return res.json();
  } catch (e) {
    console.log("Error creating vote: ", e);
  }
};
export const getVoteByEmailAndPoll = async (email: string, poll: string) => {
  try {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}/vote/${email}`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ poll }),
    });
    if (!res.ok) {
      throw new Error("failed to fetch vote");
    }
    return res.json();
  } catch (e) {
    console.log("Error Loading vote: ", e);
  }
};
