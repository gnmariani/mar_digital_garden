import { type SchemaTypeDefinition } from "sanity";
import { personCardType } from "./schemas/personCard";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [personCardType],
};
