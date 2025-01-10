import { type SchemaTypeDefinition } from "sanity";

import documentTypes from "./documents";
import globalTypes from "./global";
import pageTypes from "./pages";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documentTypes, ...globalTypes, ...pageTypes],
};
