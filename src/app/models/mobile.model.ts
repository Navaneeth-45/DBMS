export interface Mobiles{
    
        id:number;
        imageurl:string;
        productname:string;
        description:string;
        price:number;
        productdetails:[
          {
            color:string;
            size:string;
            internal:string;
            RAM:string;
            primaryCamera:string;
            secondaryCamera:string;
            battery:string;
            networkType:string;
            os:string;
            processorType:string;
            processorCore:string;
            clockspeed:string;
          
          }
        ]
      
}