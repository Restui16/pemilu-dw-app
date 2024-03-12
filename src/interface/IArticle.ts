import IUser from './IUser'
export default interface IArticle {
    id: number
    title: string
    image: string
    description: string
    user: IUser
    created_at: string | null
    updated_at: string | null
    deleted_at: string | null
}