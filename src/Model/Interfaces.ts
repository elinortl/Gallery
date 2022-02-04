
export interface ImagesContent {
    description: string,
    url: string,
    likes: string
}

export interface Response {
    data: ImagesContent[]
}

export interface ImageGridProps {
    rowDisplay: boolean;
    displayImages: ImagesContent[];
}