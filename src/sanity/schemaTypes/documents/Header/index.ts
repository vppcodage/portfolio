import { defineField, defineType } from "sanity";

const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "custom_image",
    }),
    defineField({
      name: "nav_links",
      title: "Nav Links",
      type: "array",
      of: [{ type: "label_link" }],
    }),
    defineField({
      name: "socials_links",
      title: "Socials Links",
      type: "array",
      of: [{ type: "label_icon_link" }],
    }),
  ],
});

export default header;
