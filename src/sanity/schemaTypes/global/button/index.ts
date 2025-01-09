import { defineField, defineType } from "sanity";

const button = defineType({
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
  ],
});

export default button;
