import React from "react";
import {
  Box,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Stack,
  Badge,
  ScaleFade,
} from "@chakra-ui/react";
import { useColors } from "../../hooks";
import { Project, ProjectLinks } from "../../interfaces";
import { projectLinkIcons } from "../../constants/icons";
import IconLink from "../IconLink";
import { boxShadow } from "../../theme";

interface Props {
  project: Project;
}

const ProjectCard = ({ project, ...props }: Props) => {
  const colors = useColors();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ScaleFade initialScale={0.8} in>
      <Box
        boxShadow={boxShadow.md}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        p="6"
        my="2.5"
        borderRadius={"lg"}
        borderWidth={"2"}
        borderColor={"gray"}
        backgroundColor={colors.secondary}
        transitionDuration={"200ms"}
        _hover={{ transform: `scale(1.02)` }}
      >
        <Box
          p="2"
          display={"flex"}
          flex="1"
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={{ base: "flex-start", md: "space-between" }}
            alignItems={{ base: "flex-start", md: "center" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Text fontSize={"2xl"} fontWeight={"700"}>
              {project.title}
            </Text>
            {project.date ? (
              <Text fontWeight={"300"} fontSize={"sm"} color="gray">
                {project.date}
              </Text>
            ) : null}
          </Box>
          <Text fontSize={"lg"} fontWeight={"500"}>
            {project.description}
          </Text>
          {project.links ? (
            <>
              <Text fontSize={"sm"} fontWeight={"500"} color="gray" mt="3">
                Links
              </Text>
              <Box display={"flex"} justifyContent={"flex-start"}>
                {project.links
                  ? Object.keys(project.links).map((key) => {
                      const Icon = projectLinkIcons[key as keyof ProjectLinks];
                      return (
                        <IconLink
                          aria-label="Project Link"
                          key={key}
                          href={
                            (project?.links &&
                              project.links[key as keyof ProjectLinks]) ||
                            ""
                          }
                          icon={<Icon />}
                        />
                      );
                    })
                  : null}
              </Box>
            </>
          ) : null}
          {project.developed && project.developed.length > 0 ? (
            <>
              <Text fontSize={"sm"} fontWeight={"500"} color="gray">
                Developed
              </Text>
              <Box
                display={"flex"}
                my="1"
                alignItems={"center"}
                justifyContent="flex-start"
                fontSize={"md"}
                textTransform={"none"}
                flexWrap="wrap"
              >
                {project?.developed?.map((item) => (
                  <Box key={item}>
                    <Badge
                      mx="1"
                      key={item}
                      variant="subtle"
                      textTransform={"capitalize"}
                    >
                      {item}
                    </Badge>
                  </Box>
                ))}
              </Box>
            </>
          ) : null}
          {project.technologies && project.technologies.length > 0 ? (
            <>
              <Text fontSize={"sm"} fontWeight={"500"} color="gray">
                Technologies
              </Text>
              <Stack
                direction="row"
                my="1"
                fontSize={"md"}
                textTransform={"none"}
                flexWrap="wrap"
              >
                {project?.technologies?.map((tech) => (
                  <Badge key={tech} variant="subtle" textTransform={"none"}>
                    {tech}
                  </Badge>
                ))}
              </Stack>
            </>
          ) : null}
        </Box>
        {project.image && (
          <Box
            display={"flex"}
            flex="1"
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
            onClick={onOpen}
          >
            <Image
              src={project.image}
              borderRadius={"lg"}
              height={200}
              width={400}
              alt={`${project.title} image`}
              objectFit={"cover"}
            />
          </Box>
        )}
        {project.image && (
          <Modal isOpen={isOpen} onClose={onClose} size="4xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{project.title} Image</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image
                  src={project.image}
                  borderRadius={"lg"}
                  alt={`${project.title} image`}
                  objectFit={"cover"}
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </ScaleFade>
  );
};

export default ProjectCard;
