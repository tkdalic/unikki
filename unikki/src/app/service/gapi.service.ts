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

  /**
   * Authorize Google Compute Engine API.
   */
  auth() {
    gapi.client.setApiKey(GapiService.API_KEY);
    gapi.auth.authorize(
      {
        client_id: GapiService.CLIENT_ID,
        scope: GapiService.SCOPES,
        immediate: false
      },
      function(authResult) {
        if (authResult && !authResult.error) {
          window.alert("Auth was successful!");
        } else {
          window.alert("Auth was not successful");
        }
      }
    );
  }
}
