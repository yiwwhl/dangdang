import { ImageCollector } from '@/plugins/ImageAutoLoader/ImageCollector';

export function ImageAutoLoader() {
  return {
    install() {
      ImageCollector.collectAllImages();
    },
  };
}
