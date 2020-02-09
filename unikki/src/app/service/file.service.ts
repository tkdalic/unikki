import { Injectable } from "@angular/core";
import { MarkdownFile } from "../resource-model/markdownFile";

@Injectable({
  providedIn: "root"
})
export class FileService {
  constructor() {
    const file = this.make({ title: "hoge.md", contents: "# test" });
    console.log(file);
    this.read(file).then(result => console.log(result));
  }

  make(markdownFile: MarkdownFile): File {
    return new File([markdownFile.contents], markdownFile.title, {
      type: "text/markdown"
    });
  }

  read(file: File): Promise<MarkdownFile> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () =>
        resolve({ title: file.name, contents: fileReader.result as string });
      fileReader.readAsText(file);
    });
  }
}
