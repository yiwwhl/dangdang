import { ImageCollector } from '@/utils/ImageCollector';

export function ImageAutoLoader() {
  return {
    install() {
      ImageCollector.collectAllImages();
    },
  };
}
