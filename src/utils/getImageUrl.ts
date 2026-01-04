import { CDN_URL } from "../constants/CDN";

export function getImageUrl(imageId?: string) {
  if (!imageId) return null;
  return `${CDN_URL}${imageId}`;
}
