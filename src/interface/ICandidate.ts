import IParties from "./IParties"

export default interface ICandidate {
        id: number,
        image: string
        name: string,
        visiMisi: string[]
        parties: IParties[]
}