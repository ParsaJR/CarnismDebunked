import { mdcompiler } from "@parsajr/mdcompiler";

await mdcompiler("../../public/claims/general","./general.json")
await mdcompiler("../../public/claims/environment","./environment.json")
await mdcompiler("../../public/claims/health","./health.json")

