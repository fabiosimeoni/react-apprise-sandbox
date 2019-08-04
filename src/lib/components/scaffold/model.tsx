


export type ScaffoldModel = {

    title : string
    sections: SectionModel[]

}

export type SectionModel = {

    name: string
    icon:string
    title:string
    content: JSX.Element
}