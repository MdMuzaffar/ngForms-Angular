export interface children{
    name : string,
    age : number
  }
  export  interface Passenger{
    id : number,
    fullName: string,
    checkedIn:boolean,
    checkedInDate?: number | null,
    childrens?: children[] | null
  }