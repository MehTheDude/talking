interface Article {
    FileName: string;
    Name: string;
    Summary: string;
    Date: string;
}

interface JsonObject {
    items: Article[];
}

export type { JsonObject, Article };
