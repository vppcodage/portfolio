import { defineField, defineType } from "sanity";

const title_description = defineType({
  name: "title_description",
  title: "Title Description",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});

export default title_description;
