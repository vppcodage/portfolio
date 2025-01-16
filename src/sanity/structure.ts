import type { StructureResolver } from "sanity/structure";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiOutlineTerminal } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";
import { TbNewSection } from "react-icons/tb";
import { FaHome } from "react-icons/fa";

// Structure resolver for a portfolio
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Documents")
    .items([
      // Global Section
      S.listItem()
        .title("Global")
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title("Global")
            .items([
              S.documentTypeListItem("header")
                .title("Header")
                .icon(HiOutlineTerminal),
              S.documentTypeListItem("footer")
                .title("Footer")
                .icon(HiOutlineTerminal),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Site Pages")
        .icon(RiPagesLine)
        .child(
          S.list()
            .title("Site Pages")
            .items([
              S.documentTypeListItem("home_page")
                .title("Home Page")
                .icon(FaHome),
            ])
        ),
      S.listItem()
        .title("Sections")
        .icon(TbNewSection)
        .child(
          S.list()
            .title("Sections")
            .items([
              S.documentTypeListItem("home_hero_section")
                .title("Home Hero Banner")
                .icon(HiOutlineTerminal),
            ])
        ),

      // Catch-all for other document types
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["header", "footer", "title", "home_page"].includes(item.getId()!)
      ),
    ]);
