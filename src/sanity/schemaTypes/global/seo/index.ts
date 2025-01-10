import { defineField, defineType } from "sanity";

const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "meta_title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "meta_description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "meta_image",
      title: "Feature Image",
      type: "custom_image",
    }),
    defineField({
      name: "meta_tags",
      title: "Meta Tags",
      type: "array",
      of: [{ type: "meta_tag" }],
    }),
  ],
});

export default seo;
