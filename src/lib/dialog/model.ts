
export type Dialog = {
  title : String,
  description?: String, 
  details? : String

}

export type DialogState = {
  dialog: Dialog
}

export const randomDialog= {title:"Some Dialog", description:"Some Description", details:"Some details"}