import { defineField, defineType } from "sanity";

const open_graph = defineType({
  name: "open_graph",
  title: "Open Graph",
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
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "custom_image",
    }),
  ],
});

export default open_graph;
