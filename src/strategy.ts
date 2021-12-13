export interface ISaveStrategy {
  save(entity: Record<string, any>): Promise<void>;
  read<T>(): Promise<T>;
}

// class FileSaveStrategy {}
// class DbSaveStrategy {}

class SaveStrategy {
  constructor() {}
}
