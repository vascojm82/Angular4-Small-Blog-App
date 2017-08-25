export interface Comments{
    _id: number;
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
    hidden: boolean;
    voteCount: number;
}