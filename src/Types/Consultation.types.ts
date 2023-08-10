import { MakeCallStatus } from "../constant/Consultation";

export  interface ConsultationType{
    [key:string]: string | MakeCallStatus
    id:string,
    userName:string,
    date:string,
    time:string,
    total:string,
    makeCallStatus:MakeCallStatus
}