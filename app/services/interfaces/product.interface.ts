export interface IProductResponse {
    count: number;
    next: any;
    previous: any;
    results: IProduct[];
}

export interface IProduct {
    id:                string;
    name:              string;
    name_from_1c:      string;
    price:             string;
    volume:            null;
    is_ready:          boolean;
    is_retail_allowed: boolean;
    description:       string;
    images:            any[];
    created_at:        Date;
    updated_at:        Date;
    brand:             Brand;
}
export interface Brand {
    id:     string;
    name:   string;
    icon:   string;
    margin: number;
}