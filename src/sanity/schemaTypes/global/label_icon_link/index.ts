import { defineField, defineType } from "sanity";

const label_icon_link = defineType({
  name: "label_icon_link",
  title: "Label Icon Link",
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
    defineField({
      name: "icon",
      title: "Icon",
      type: "custom_image",
    }),
  ],
});

export default label_icon_link;
