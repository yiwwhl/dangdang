import path from 'path';
import fs from 'fs';
import Router from 'koa-router';

function isDir(absPath: string) {
  return fs.lstatSync(absPath).isDirectory();
}

function isRouterModule(module: any): module is Router {
  return module instanceof Router;
}

export class RouterLoader {
  static routerLoader = new RouterLoader();

  static getRootRouter() {
    return this.routerLoader.rootRouter;
  }

  private constructor() {
    this.startUp();
  }

  rootRouter = new Router();

  routerAbsPathLake = new Set<string>();

  startUp() {
    const rootDirPath = path.join(process.cwd(), '/src/router');

    this.routerAbsPathLake.clear();

    this.setupRootRouter();

    this.getRouterFiles(rootDirPath);

    this.requireRouterInAbsPathLake();
  }

  getRouterFiles(dirPath: string) {
    const filesInPath = fs.readdirSync(dirPath);
    let absPath;
    filesInPath.forEach((file) => {
      absPath = `${dirPath}/${file}`;
      if (isDir(absPath)) {
        this.getRouterFiles(absPath);
      } else {
        this.routerAbsPathLake.add(absPath);
      }
    });
  }

  requireRouterInAbsPathLake() {
    this.routerAbsPathLake.forEach((absPath) => {
      const module = require(absPath).default;
      if (isRouterModule(module)) {
        this.rootRouter.use(module.routes(), module.allowedMethods());
      }
    });
  }

  setupRootRouter() {
    // none personalizations yet
  }
}
