import IUser from "./IUser"
import ICandidate from "./ICandidate"
export default interface IVoter {
    id: number
    user: IUser
    candidate: ICandidate
}