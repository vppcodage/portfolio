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
      name: "nav_links",
      title: "Nav Links",
      type: "array",
      of: [{ type: "label_link" }],
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "button",
    }),
    defineField({
      name: "background_classname",
      title: "Background Classname",
      type: "string",
      initialValue: "white",
      options: {
        // list: background_classname,
        direction: "horizontal",
        layout: "radio",
      },
    }),
  ],
});

export default header;
