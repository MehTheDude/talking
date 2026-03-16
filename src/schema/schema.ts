interface Article {
    FileName: string;
    Name: string;
}

interface JsonObject {
    items: Article[];
}

export type { JsonObject, Article };
