
export type Box = {
  title : String,
  description?: String, 
  details? : String

}

export type BoxState = {
  box: Box
}

export const randomDialog= {title:"Some Title", description:"Some Description", details:"Some details"}