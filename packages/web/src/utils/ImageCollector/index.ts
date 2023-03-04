import { merge } from 'lodash'
import { getLocalItem, setLocalItem } from 'shared'
import { GlobModuleType, ImageStore } from './type'

const IMAGE_STORE_NAME = 'asstes_images'

function getImageName(name: string) {
  return name.split('/').at(-1)?.split('.').at(-2)!
}
function getImageAbsolutePath(module: GlobModuleType) {
  return module.default
}
function shouldStore() {
  const storeImages = getLocalItem(IMAGE_STORE_NAME)
  ImageCollector.imageStore = storeImages
  return shouldLoadOnce(Object.keys(storeImages).length)
}
function shouldLoadOnce(size: number) {
  return size > 0
}

export class ImageCollector {
  static imageStore: ImageStore = {}

  static collectAllImages() {
    // TODO: happy path. consider refactor
    if (shouldStore()) return

    const images_png = import.meta.glob('../../assets/**/*.png', {
      eager: true,
    })
    const images_jpg = import.meta.glob('../../assets/**/*.jpg', {
      eager: true,
    })

    const allLoadedImages = merge(images_jpg, images_png) as Record<
      string,
      GlobModuleType
    >
    Object.keys(allLoadedImages).forEach((relativePath: string) => {
      this.imageStore[getImageName(relativePath)] = getImageAbsolutePath(
        allLoadedImages[relativePath]
      )
    })
    setLocalItem(IMAGE_STORE_NAME, this.imageStore)
  }

  static getImage(imageName: string) {
    return this.imageStore[imageName]
  }
}

export const getImage = ImageCollector.getImage.bind(ImageCollector)
