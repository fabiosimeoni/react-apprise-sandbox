import { ReactNode } from "react";



export type ScaffoldModel = {

    title : string
    sections: SectionModel[]

}

export type SectionModel = {

    name: string
    icon:string
    title:string
    route: { path: string, exact: boolean};
    content: ReactNode
}