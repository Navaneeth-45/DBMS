export interface Headphones{
    id:number;
      imageurl:string;
      productname:string;
      description:string;
      price:number;
      productdetails:[ {
                                     Brand:string;
                                     Manufacturer:string;
                                     Model:string;
                                     ConnectorType:string;
                                     ModelName:string;
                                    Batteries:string;    
                               } 
                            ],
      size:string;
}