export declare class UserController {
    create(user: any): Promise<{
        user: any;
    }>;
    list(): Promise<{
        users: any[];
    }>;
    search(params: any): Promise<{
        users: {};
        params: any;
    }>;
    update(user: any, params: any): Promise<{
        method: string;
        user: any;
        params: any;
    }>;
    updatePartial(user: any, params: any): Promise<{
        method: string;
        user: any;
        params: any;
    }>;
}
