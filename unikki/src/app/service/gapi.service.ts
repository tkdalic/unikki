import { Injectable } from "@angular/core";
import { environment } from "./../..//environments/environment";

@Injectable({
  providedIn: "root"
})
export class GapiService {
  constructor() {}

  private static readonly PROJECT_ID = environment.projectId;
  private static readonly CLIENT_ID = environment.clientId;
  private static readonly API_KEY = environment.apiKey;
  private static readonly SCOPES = environment.scopes;
  private static readonly DIRECTORY_NAME = "unikki_directory";

  /**
   * Authorize Google Compute Engine API.
   */
  auth(): Promise<GoogleApiOAuth2TokenObject> {
    gapi.client.setApiKey(GapiService.API_KEY);
    return new Promise((resolve, reject) => {
      gapi.auth.authorize(
        {
          client_id: GapiService.CLIENT_ID,
          scope: GapiService.SCOPES,
          immediate: false
        },
        response => resolve(response)
      );
    });
  }

  listFiles(
    query?: string
  ): Promise<gapi.client.Response<gapi.client.drive.FileList>> {
    return new Promise((resolve, reject) =>
      gapi.client.drive.files
        .list({
          corpora: "user",
          fields: "files(kind, id, mimeType, name, webContentLink)",
          q: query
        })
        .execute(response => resolve(response))
    );
  }

  getFileContents(fileId: string): Promise<string> {
    return new Promise((resolve, reject) =>
      gapi.client.drive.files
        .get({
          fileId,
          alt: "media"
        })
        .then(response => resolve(response.body))
    );
  }

  makeFile(
    name: string,
    mimeType: string,
    otherOptions: object = {}
  ): Promise<gapi.client.Response<gapi.client.drive.File>> {
    return new Promise((resolve, reject) =>
      gapi.client.drive.files
        .create({
          resource: { name, mimeType, ...otherOptions }
        })
        .execute(response => resolve(response))
    );
  }

  updateFile(fileId: string, media: File): Promise<XMLHttpRequest> {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.onreadystatechange = () => {
        if (xhr.readyState != XMLHttpRequest.DONE) {
          return;
        }
        resolve(xhr.response);
      };
      xhr.open(
        "PATCH",
        "https://www.googleapis.com/upload/drive/v3/files/" +
          fileId +
          "?uploadType=media"
      );
      xhr.setRequestHeader(
        "Authorization",
        "Bearer " + gapi.auth.getToken().access_token
      );
      xhr.send(media);
    });
  }

  async getOrCreateDirectory(
    directoryName: string = GapiService.DIRECTORY_NAME
  ): Promise<gapi.client.drive.File | null> {
    const unikkiDirectories = await this.listFiles(
      `mimeType = 'application/vnd.google-apps.folder' and name = '${directoryName}'`
    );
    if (unikkiDirectories.result.files.length) {
      return unikkiDirectories.result.files[0];
    }
    const unikkiDirectoryResponse = await this.makeFile(
      GapiService.DIRECTORY_NAME,
      "application/vnd.google-apps.folder"
    );
    if (unikkiDirectoryResponse.result.id) {
      return unikkiDirectories.result;
    }
    return null;
  }

  async getUnikkiFile(
    directory: gapi.client.drive.File,
    fileName: string
  ): Promise<gapi.client.drive.File | null> {
    const unikkiFiles = await this.listFiles(
      `mimeType = 'text/markdown' and trashed = false and '${directory.id}' in parents and name = '${fileName}'`
    );
    if (unikkiFiles.result.files.length) {
      return unikkiFiles.result.files[0];
    }
    const makeFile = await this.makeFile(fileName, "text/markdown", {
      parents: [directory.id]
    });
    if (makeFile.result.id) {
      return makeFile.result;
    }
    return null;
  }
}
