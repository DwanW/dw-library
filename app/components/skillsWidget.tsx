"use client";
import { faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid } from "@radix-ui/themes";
import React from "react";
import SkillCard from "./skillCard";

const SKILLS = [
  {
    label: "React",
    icon: (color: string | undefined) => (
      <FontAwesomeIcon icon={faReact} color={color} />
    ),
  },
  {
    label: "SQL/NoSQL DB",
    icon: (color: string | undefined) => (
      <FontAwesomeIcon icon={faDatabase} color={color} />
    ),
  },
  {
    label: "API Development",
    icon: (color: string | undefined) => (
      <FontAwesomeIcon icon={faServer} color={color} />
    ),
  },
  {
    label: "Python",
    icon: (color: string | undefined) => (
      <FontAwesomeIcon icon={faPython} color={color} />
    ),
  },
];

interface SkillsWidgetProps {}

const SkillsWidget: React.FC<SkillsWidgetProps> = ({}) => {
  return (
    <Grid
      columns={{
        initial: "2",
        sm: "4",
        md: "5",
        lg: "6",
      }}
      gap={{
        initial: "2",
        xs: "3",
      }}
    >
      {SKILLS.map((obj) => (
        <SkillCard key={obj.label} text={obj.label} icon={obj.icon} />
      ))}
    </Grid>
  );
};

export default SkillsWidget;
