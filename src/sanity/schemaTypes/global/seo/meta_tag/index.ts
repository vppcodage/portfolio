import { defineField, defineType } from "sanity";

const meta_tag = defineType({
  name: "meta_tag",
  title: "Meta Tag",
  type: "object",
  fields: [
    defineField({
      name: "meta_attributes",
      title: "Meta Attributes",
      type: "array",
      of: [{ type: "meta_attribute" }],
    }),
  ],
  preview: {
    select: {
      title: "attribute_name",
      meta_tags: "meta_attributes",
    },
    prepare({ meta_tags }) {
      return {
        title:
          meta_tags && meta_tags[0]?.attribute_value_string
            ? meta_tags[0]?.attribute_value_string
            : "Meta Tag",
      };
    },
  },
});

export default meta_tag;
