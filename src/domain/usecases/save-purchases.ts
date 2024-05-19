//Não fica acoplado a api ou cache
export interface SavePurchases {
    save(purchases: SavePurchases.Params[]) : Promise<void>
}

namespace SavePurchases {
    export type Params = {
        id: string
        date: Date 
        value: number
    }
    
    // export interface SavePurchases {
    //     save(purchases: SavePurchases.Params)
    // }
}


