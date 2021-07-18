export interface Watches{
    id:number;
      imageurl:string;
      productname:string;
      description:string;
      price:number;
      productdetails:[ {
                                 brandname:string;
                                 model:string;
                                 movement:string;
                                 waterRestiance:string;
                                 crystal:string;
                                 dialNumerals:string;
                               } 
                            ],
      size:string;
}