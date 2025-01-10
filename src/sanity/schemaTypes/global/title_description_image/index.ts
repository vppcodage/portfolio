import { defineField, defineType } from "sanity";

const title_description_image = defineType({
  name: "title_description_image",
  title: "Title Description Image",
  type: "object",
  fields: [
    defineField({
      name: "section_title",
      title: "Section Title",
      type: "title",
    }),
    defineField({
      name: "section_description",
      title: "Section Description",
      type: "rich_text",
    }),
    defineField({
      name: "section_image",
      title: "Section Image",
      type: "custom_image",
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: "Title Description Image",
      };
    },
  },
});

export default title_description_image;
