import YwCollector from '../utils/yw-collector/index';

export enum FileType {
  TS = '.ts',
  DTS = '.d.ts',
}

type FileTypeToAbsPath = Record<FileType, string[]>;

const collector = new YwCollector();

const rootTsFileAbsPath = process.cwd() + '/declare/enum.ts';
const rootDTsFileAbsPath = process.cwd() + '/declare/index.d.ts';

collector.getFilesInDirPath(process.cwd() + '/declare/modules');

const fileTypeToAbsPathMap: FileTypeToAbsPath = {
  [FileType.TS]: [],
  [FileType.DTS]: [],
};

collector.fileAbsPathLake.forEach((absPath) => {
  if (collector.ifFileTypeIsTheGivinType(absPath, FileType.DTS)) {
    fileTypeToAbsPathMap[FileType.DTS].push(absPath);
  } else {
    fileTypeToAbsPathMap[FileType.TS].push(absPath);
  }
});

let rootTsContent = '';
let rootDTsContent = '';

fileTypeToAbsPathMap[FileType.TS].forEach((absPath) => {
  rootTsContent += collector.getFileContent(absPath);
});

fileTypeToAbsPathMap[FileType.DTS].forEach((absPath) => {
  rootDTsContent += collector.getFileContent(absPath);
});

collector.setFileContent(rootTsFileAbsPath, rootTsContent);
collector.setFileContent(rootDTsFileAbsPath, rootDTsContent);
