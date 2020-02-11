import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  private static readonly DB_NAME = "unikki_db";
  private static readonly TABLE_NAME = "kvs";
  constructor() {}

  private getDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const dbOpenRequest = indexedDB.open(StorageService.DB_NAME, 1);
      dbOpenRequest.onerror = reject;
      dbOpenRequest.onupgradeneeded = ev => {
        const db = dbOpenRequest.result;
        const store = db.createObjectStore(StorageService.TABLE_NAME, {
          keyPath: "key"
        });
        store.createIndex(StorageService.TABLE_NAME, ["key", "value"]);
      };
      dbOpenRequest.onsuccess = ev => resolve(dbOpenRequest.result);
    });
  }

  private getStore(db: IDBDatabase, mode: IDBTransactionMode): IDBObjectStore {
    const transaction = db.transaction([StorageService.TABLE_NAME], mode);
    return transaction.objectStore(StorageService.TABLE_NAME);
  }

  private closeDB() {}

  async set(key: string, value: string): Promise<void> {
    const db = await this.getDB();
    const store = this.getStore(db, "readwrite");
    store.put({ key, value });
    db.close();
  }

  get(key: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const db = await this.getDB();
      const store = this.getStore(db, "readonly");
      const data = store.get(key);
      data.onsuccess = () => {
        db.close();
        resolve(data.result.value);
      };
    });
  }
}
