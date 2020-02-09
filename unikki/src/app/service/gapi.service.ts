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

  makeFolder(
    folderName: string
  ): Promise<gapi.client.Response<gapi.client.drive.File>> {
    return new Promise((resolve, reject) =>
      gapi.client.drive.files
        .create({
          resource: {
            name: folderName,
            mimeType: "application/vnd.google-apps.folder"
          }
        })
        .execute(response => {
          resolve(response);
        })
    );
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
    const unikkiDirectoryResponse = await this.makeFolder(
      GapiService.DIRECTORY_NAME
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
    return unikkiFiles.result.files[0] || null;
  }
}
