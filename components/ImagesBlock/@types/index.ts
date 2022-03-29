export type TImagesBlock = {
  leftImages: {
    alt: string;
    imageUrl: string;
    title?: string;
    description?: string;
  }[];
  rightImages: {
    alt: string;
    imageUrl: string;
    title?: string;
    description?: string;
  }[];
  className?: string;
};
