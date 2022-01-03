import StorageStack from "./storageStack";
import APIStack from "./ApiStack";

export default function main(app) {
  const storageStack = new StorageStack(app, "storage");

  new APIStack(app, "api", {
    table: storageStack.table,
  });
}
