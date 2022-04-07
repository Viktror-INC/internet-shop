export type TVerticalImageBlock = {
  verticalImages: {
    title?: string;
    description?: string;
    price?: string;
    imageUrl: string;
    count?: string;
    type?: string;
    salesType?: string;
    id: number;
  }[];
  wrapBlockInner?: boolean;
};
