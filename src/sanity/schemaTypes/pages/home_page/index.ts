import { modes } from "@/sanity/lib";
import { defineField, defineType } from "sanity";

const home_page = defineType({
  name: "home_page",
  title: "Home",
  type: "document",
  groups: [
    {
      name: "main",
      title: "Main",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "This field is only used for CMS.",
      group: "main",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      group: "main",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "reference",
      to: [{ type: "header" }],
      group: "main",
    }),
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      // of: [
      //   { type: "home_hero_section" },
      //   { type: "featurd_case_study" },
      //   { type: "section_course_title" },
      //   { type: "price_section_document" },
      //   { type: "case_study" },
      //   { type: "blog_title_section" },
      //   { type: "testimonials_section" },
      //   { type: "comparision_frameworks" },
      //   { type: "title_image_array_section" },
      //   { type: "customer_reviews" },
      // ],
      group: "main",
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
      group: "main",
    }),
    defineField({
      name: "section_theme",
      title: "Section Theme",
      initialValue: "bg-white",
      type: "string",
      group: "main",
      options: { list: modes, direction: "horizontal", layout: "radio" },
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
  ],
});

export default home_page;
