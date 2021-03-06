import { v4 as uuidv4 } from "uuid";

export const fieldsForm1 = [
  {
    id: uuidv4(),
    isHalfSizeOnDektop: false,
    isRequired: true,
    label: "Name",
    placeholder: "Name",
    slug: "name",
    type: "text",
  },
  {
    id: uuidv4(),
    isHalfSizeOnDektop: false,
    isRequired: true,
    label: "Email",
    placeholder: "Email",
    slug: "email",
    type: "text",
  },
  {
    id: uuidv4(),
    isHalfSizeOnDektop: true,
    isRequired: true,
    label: "Company",
    placeholder: "Company",
    slug: "company",
    type: "text",
  },
  {
    id: uuidv4(),
    isHalfSizeOnDektop: true,
    isRequired: true,
    label: "Interest",
    placeholder: "Interest",
    slug: "interest",
    type: "select",
    options: [
      { value: "ux-ui-design", label: "UX UI Design" },
      { value: "front-end-development", label: "Front End Development" },
      { value: "back-end-development", label: "Back End Development" },
    ],
  },
  {
    id: uuidv4(),
    isHalfSizeOnDesktop: false,
    isRequired: true,
    label: "Message",
    placeholder: "Your Message",
    slug: "message",
    type: "textarea",
  },
  {
    id: uuidv4(),
    default: false,
    isRequired: true,
    label: "Terms Applied",
    slug: "terms",
    text: "Before applying accept our Terms",
    type: "checkbox",
  },
];

export const fieldsForm2 = [
  {
    id: uuidv4(),
    isHalfSizeOnDektop: true,
    isRequired: true,
    label: "First Name",
    placeholder: "First Name",
    slug: "first-name",
    type: "text",
  },
  {
    id: uuidv4(),
    isHalfSizeOnDektop: true,
    isRequired: true,
    label: "Last Name",
    placeholder: "Last Name",
    slug: "last-name",
    type: "text",
  },
  {
    id: uuidv4(),
    isHalfSizeOnDektop: true,
    isRequired: true,
    label: "Email",
    placeholder: "Email",
    slug: "email",
    type: "text",
  },
  {
    id: uuidv4(),
    isHalfSizeOnDektop: true,
    isRequired: true,
    label: "Mobile Phone",
    placeholder: "Mobile Phone",
    slug: "mobile-phone",
    type: "text",
  },
  {
    id: uuidv4(),
    isHalfSizeOnDektop: false,
    isRequired: true,
    label: "Address",
    placeholder: "Address",
    slug: "address",
    type: "text",
  },
  {
    id: uuidv4(),
    isHalfSizeOnDektop: false,
    isRequired: true,
    label: "Regarding",
    placeholder: "Regarding*",
    slug: "regarding",
    type: "select",
    options: [
      { value: "general-inquiries", label: "General Inquiries" },
      { value: "business-inquiries", label: "Business Inquiries" },
      { value: "marketing-seekers", label: "Marketing Inquiries" },
    ],
  },
  {
    id: uuidv4(),
    isHalfSizeOnDesktop: false,
    isRequired: true,
    label: "Message",
    placeholder: "Your Message*",
    slug: "message",
    type: "textarea",
  },
  {
    id: uuidv4(),
    default: false,
    isRequired: true,
    label: "Terms Applied",
    slug: "terms",
    text: "Before applying accept our Terms",
    type: "checkbox",
  },

  {
    id: uuidv4(),
    type: "file",
    accept: ".pdf, .doc, docx",
    text: "Upload File",
    label: "File",
    slug: "upload-file",
    description: "Only .pdf, .doc and .docx are allowed. Max file size 5 MB.",
    isRequired: true,
  },
];
