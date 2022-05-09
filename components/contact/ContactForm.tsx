import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useFormspark } from "@formspark/use-formspark";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useColors } from "../../hooks";
import { boxShadow } from "../../theme";
import config from "../../constants/config";

interface Props {}

const ContactForm = (props: Props) => {
  const colors = useColors();
  const toast = useToast();
  const [token, setToken] = useState("");
  const captchaRef = useRef<HCaptcha | null>(null);
  const [submit, submitting] = useFormspark({
    formId: config.formsparkFormId!,
  });
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (
    e: React.FormEvent<HTMLDivElement> & React.FormEvent<HTMLFormElement>
  ) => {
    e?.preventDefault();
    sendMessage();
  };

  useEffect(() => {
    if (submitted && token) {
      sendMessage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted, token]);

  const sendMessage = async () => {
    try {
      setSubmitted(true);
      if (!token) {
        setLoading(true);
        captchaRef.current?.execute();
        return;
      }
      await submit({ message, email, name, "h-captcha-response": token });
      resetForm();
      toast({
        title: `I got your message. Thank you ${name}!`,
        status: "success",
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "An error occured :(",
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
  };

  const resetForm = () => {
    setMessage("");
    setName("");
    setEmail("");
    setSubmitted(false);
    setLoading(false);
  };

  const onVerify = (token: string) => {
    setToken(token);
    setLoading(false);
  };

  return (
    <Box
      as={"form"}
      onSubmit={onSubmit}
      display={"flex"}
      flexDirection="column"
      boxShadow={boxShadow.md}
      backgroundColor={colors.secondary}
      p="5"
      borderRadius={"md"}
      m="2"
    >
      <FormControl isRequired my="2">
        <FormLabel htmlFor="name" fontWeight={"bold"} fontSize="md">
          Name
        </FormLabel>
        <Input
          id="name"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired my="2">
        <FormLabel htmlFor="email" fontWeight={"bold"} fontSize="md">
          Email
        </FormLabel>
        <Input
          id="email"
          type="email"
          required
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired my="2">
        <FormLabel htmlFor="message" fontWeight={"bold"} fontSize="md">
          Message
        </FormLabel>
        <Textarea
          id="message"
          required
          minHeight={"20vh"}
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormControl>
      <HCaptcha
        size="invisible"
        sitekey={config.hCaptchaSiteKey!}
        onVerify={onVerify}
        ref={captchaRef}
      />
      <Button
        aria-label="Submit Form"
        isLoading={loading || submitting}
        loadingText={loading ? "HCaptcha Loading.." : "Submitting.."}
        type="submit"
        isFullWidth
        disabled={submitting || loading}
        my="2"
      >
        Send a Message!
      </Button>
    </Box>
  );
};

export default ContactForm;
