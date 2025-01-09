import { type SchemaTypeDefinition } from "sanity";

import documentTypes from "./documents";
import globalTypes from "./global";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documentTypes, ...globalTypes],
};
