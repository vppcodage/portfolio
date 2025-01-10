import { defineField, defineType } from "sanity";

const label_link = defineType({
  name: "label_link",
  title: "Label Link",
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
      type: "string",
    }),
  ],
});

export default label_link;
