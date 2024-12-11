import { NOT_FOUND } from "@/errors/codes.ts";
import { GraphQLError } from "graphql";

export class NotFoundError extends GraphQLError {
  constructor(message: string = "Not found") {
    super(message);
    this.name = "NotFoundError";
    this.extensions.code = NOT_FOUND;
  }
}
