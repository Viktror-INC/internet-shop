export type TImagesBlock = {
  wrapBlockInner?: boolean;
  className?: string;
  leftImages: TLeftImages;
  rightImages: TRightImages;
};

export type TLeftImages = {
  alt: string;
  imageUrl: string;
  title?: string;
  description?: string;
  id: number;
}[];

export type TRightImages = {
  title?: string;
  description?: string;
  price?: string;
  imageUrl: string;
  count?: string;
  type?: string;
  salesType?: string;
  alt: string;
  id: number;
}[];
