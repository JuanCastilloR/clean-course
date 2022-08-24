import { LocalDataBaseService, JsonDataBaseService } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postsProvider: JsonDataBaseService) {}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        // const jsonDB = new JsonDataBaseService();
        // this.posts = await jsonDB.getPosts();
        this.posts = await this.postsProvider.getPosts();

        return this.posts;
    }
}
