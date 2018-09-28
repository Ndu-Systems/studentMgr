export const IS_LOCAL = false;
let api ="http://demo.ndu-systems.net/api"
let web ="http://demo.ndu-systems.net"
if(IS_LOCAL){
    api='http://localhost:8080/StudentMarks/api';
    web='http://localhost:4200';
    
}else{

}
export   const API_URL=api;
export const  WEB_HOST = web;

export const EMAIL= "http://demo.ndu-systems.net/api/emailClient2.php";
export const emailbeta = "http://ndu-systems.net/api/email.php"


export function GetImagePath(imageUrl){
return `${API_URL}/Invest/${imageUrl}`;
}
export const INCOME_TYPE_CODE = 1;
export const EXPENSE_TYPE_CODE = 2;

export const monthNamesOrder = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
  };

