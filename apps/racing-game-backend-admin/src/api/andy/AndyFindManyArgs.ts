import { AndyWhereInput } from "./AndyWhereInput";
import { AndyOrderByInput } from "./AndyOrderByInput";

export type AndyFindManyArgs = {
  where?: AndyWhereInput;
  orderBy?: Array<AndyOrderByInput>;
  skip?: number;
  take?: number;
};
