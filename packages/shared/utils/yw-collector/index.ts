import fs from 'fs';

enum ModuleType {
  ESM = 'esm',
  CJS = 'cjs',
}

function isDirectory(absPath: string) {
  return fs.lstatSync(absPath).isDirectory();
}

export class YwCollector {
  fileAbsPathLake = new Set<string>();

  getFilesInDirPath(dirPath: string) {
    const filesInPath = fs.readdirSync(dirPath);
    let absPath;
    filesInPath.forEach((file) => {
      absPath = `${dirPath}/${file}`;
      if (isDirectory(absPath)) {
        this.getFilesInDirPath(absPath);
      } else {
        this.fileAbsPathLake.add(absPath);
      }
    });
    return this.fileAbsPathLake;
  }

  getFileContent(asbPath: string) {
    return fs.readFileSync(asbPath);
  }

  // happy path
  getFileModule(absPath: string, moduleType: ModuleType = ModuleType.ESM) {
    if (moduleType === ModuleType.ESM) {
      return require(absPath).default;
    }
  }

  setFileContent(absPath: string, content: any) {
    fs.writeFileSync(absPath, content);
  }

  ifFileTypeIsTheGivinType(absPath: string, givinType: string) {
    // happy path
    // bug: .d.ts file will be identified as .ts file
    return absPath.endsWith(givinType);
  }
}

export default function createYwCollector() {
  return new YwCollector();
}
