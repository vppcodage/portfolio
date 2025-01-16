import { background_classname, modes } from "@/sanity/lib";
import { defineField, defineType } from "sanity";

const home_hero_section = defineType({
  name: "home_hero_section",
  title: "Home Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "hero_image",
      title: "Hero Image",
      type: "custom_image",
    }),
    defineField({
      name: "hero_title",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "hero_description",
      title: "Hero Description",
      type: "text",
    }),
    defineField({
      name: "title_image",
      title: "Title Image",
      type: "custom_image",
    }),
    defineField({
      name: "resume_button",
      title: "Resume Button",
      type: "button",
    }),
    defineField({
      name: "bottom_description",
      title: "Bottom Description",
      type: "text",
    }),
    defineField({
      name: "section_theme",
      title: "Section Theme",
      type: "string",
      initialValue: "bg-white",
      options: { list: modes, direction: "horizontal", layout: "radio" },
    }),
    defineField({
      name: "background_classname",
      title: "Background Classname",
      type: "string",
      initialValue: "white",
      options: {
        list: background_classname,
        direction: "horizontal",
        layout: "radio",
      },
    }),
  ],
});

export default home_hero_section;
