import { SectionHeading } from "@/sanity/lib";
import { defineField, defineType } from "sanity";

const rich_text = defineType({
  name: "rich_text",
  title: "Rich Text",
  type: "object",
  fields: [
    defineField({
      name: "custom_rich_text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading1", value: "h1" },
            { title: "Heading2", value: "h2" },
            { title: "Heading3", value: "h3" },
            { title: "Heading4", value: "h4" },
            { title: "Heading5", value: "h5" },
            { title: "Heading6", value: "h6" },
            { title: "Quote", value: "blockquote" },
            {
              title: "Section Heading",
              value: "section-heading",
              component: SectionHeading,
            },
          ],
        },
      ],
    }),
  ],
});

export default rich_text;
