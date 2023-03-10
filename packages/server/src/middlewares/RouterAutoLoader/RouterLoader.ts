import path from 'path';
import Router from 'koa-router';
import { createRouter } from '../../utils/RouterCreator';
import createYwCollector from 'shared/utils/yw-collector';

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

  rootRouter = createRouter();

  collector = createYwCollector();

  startUp() {
    const rootRooterDirPath = path.join(process.cwd(), '/src/router');

    this.getRouterFiles(rootRooterDirPath);

    this.requireRouterInAbsPathLake();
  }

  getRouterFiles(dirPath: string) {
    this.collector.getFilesInDirPath(dirPath);
  }

  requireRouterInAbsPathLake() {
    this.collector.fileAbsPathLake.forEach((absPath) => {
      const module = this.collector.getFileModule(absPath);
      if (isRouterModule(module)) {
        this.rootRouter.use(module.routes(), module.allowedMethods());
      }
    });
  }
}
