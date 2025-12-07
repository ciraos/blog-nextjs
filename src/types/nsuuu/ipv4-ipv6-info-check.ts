
//!
export interface Ipv4AndIpv6InfoCheckResponse {
    code: number;
    message: string;
    data: {
        ip: string;
        country: string;
        province: string;
        city: string;
        isp: string;
        lattitude: number;
        longitude: number;
        address: string;
    };
    request_id: string;
}
