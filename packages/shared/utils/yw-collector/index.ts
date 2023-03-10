import fs from 'fs';

function isDir(absPath: string) {
  return fs.lstatSync(absPath).isDirectory();
}

class YwCollector {
  fileAbsPathLake = new Set<string>();

  getFilesInDirPath(dirPath: string) {
    const filesInPath = fs.readdirSync(dirPath);
    let absPath;
    filesInPath.forEach((file) => {
      absPath = `${dirPath}/${file}`;
      if (isDir(absPath)) {
        this.getFilesInDirPath(absPath);
      } else {
        this.fileAbsPathLake.add(absPath);
      }
    });
  }

  getFileContent(asbPath: string) {
    return fs.readFileSync(asbPath);
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

export default YwCollector;
