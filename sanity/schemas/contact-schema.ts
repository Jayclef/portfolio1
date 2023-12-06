import { BiBriefcase } from "react-icons/bi";

const contact = {
  name: "contact",
  title: "Contact Form",
  type: "document",
  icon: BiBriefcase,
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "text",
    },
  ],
};

export default contact;
