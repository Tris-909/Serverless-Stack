import StorageStack from "./storageStack";

export default function main(app) {
  new StorageStack(app, "storage");
}
