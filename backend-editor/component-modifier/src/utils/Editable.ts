import { deleteFolderSync, createIndexYaml } from "./fileUtils";

export abstract class Editable {
  static REGISTER_ID = "EDITABLE";
  longPath: string;
  name: string;
  folderPath: string;
  yamlPathLong: string;

  constructor(path, name) {
    this.longPath = path;
    this.name = name;
  }
  async destroy() {
    console.log("Destroying", this.getRegisterID(), this.folderPath);
    await deleteFolderSync(this.folderPath);
  }
  async initIndexYaml(path, removeContent = true) {
    [this.yamlPathLong, this.folderPath] = await createIndexYaml(
      path,
      removeContent
    );
    console.log("YAML Path:", this.yamlPathLong);
  }

  abstract add(something): Promise<any>;
  abstract remove(something): Promise<any>;
  abstract update(something): Promise<any>;
  abstract getData(): Promise<any>;

  async saveData(savePath) {
    throw new Error("Method 'saveData()' must be implemented.");
  }
  abstract getRegisterID(): string;
  async loadData() {
    throw new Error("Method 'loadData()' must be implemented.");
  }
}

exports.Editable = Editable;