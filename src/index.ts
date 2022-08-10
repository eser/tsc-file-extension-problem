import { dummy } from "./dummy.ts";

const result = dummy();

console.log(result?.text ?? "no text");
