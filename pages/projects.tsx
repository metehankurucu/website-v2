import React, { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { PageTitle, ProjectCard } from "../components";
import { PROJECTS } from "../data";
import { Project, ProjectType } from "../interfaces";
import { fullName, projectTypes } from "../constants";
import { layoutWidth } from "../theme";
import { GetStaticProps } from "next";

interface Props {
  allProjects: Project[];
}

const Projects = ({ allProjects }: Props) => {
  const [data, setData] = useState(allProjects);
  const [types, setTypes] = useState<null | ProjectType[]>(null);

  useEffect(() => {
    if (!types || types.length === 0) {
      setData(allProjects);
      return;
    }

    const filteredData = allProjects.filter((project) => {
      return project.types.some((type) => {
        return types.includes(type);
      });
    });

    setData([...filteredData]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [types]);

  const toggleType = (type: ProjectType) => {
    if (!types) {
      setTypes([type]);
      return;
    }
    const items = [...types];
    const index = items.findIndex((item) => item === type);

    if (~index) items.splice(index, 1);
    else items.push(type);
    setTypes(items);
  };

  return (
    <Box
      display={"flex"}
      flex={"1"}
      flexDirection={"column"}
      width={layoutWidth}
      marginX="auto"
      p="5"
    >
      <Box>
        <PageTitle>Projects</PageTitle>
        <Box display={"flex"} flexDirection={"column"}>
          <Text fontSize={"lg"} fontWeight="600" mr={"4"} mb="1">
            Filter By Type
          </Text>
          <Box>
            {projectTypes.map((type) => {
              const isSelected = types?.includes(type);
              return (
                <Button
                  key={type}
                  size="sm"
                  m="1"
                  borderRadius={"lg"}
                  onClick={() => toggleType(type)}
                  variant={isSelected ? "solid" : "outline"}
                  color={isSelected ? "white" : undefined}
                  colorScheme={"cyan"}
                >
                  {type}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Box>
      {data.length === 0 && (
        <Text
          fontSize={"xl"}
          my="3"
          fontWeight="bold"
          color="gray.500"
          textAlign={"center"}
        >
          Not found..
        </Text>
      )}
      <Box display={"grid"} gridTemplateColumns="1fr" gridColumnGap="5">
        {data.map((project, index) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      allProjects: PROJECTS,
      pageTitle: `Projects | ${fullName}`,
    },
  };
};

export default Projects;
