type Video = {
    title: string;
    url: string;
    thumbnail: string;
    tagList: string[];
};

type Highlight = {
    url: string;
    videoTitle: string
    tags: string[];
    comments: string;
    startTime:number;
    endTime: number;
    highlightName: string; 
};

export {
    Video, Highlight
};