import { Request, Response } from 'express';

export const rootHandler = (_req: Request, res: Response) => {
    return res.send('Api works!');
}

interface HelloResponse {
    hello: string;
}
type HelloBuilder = (name: string) => HelloResponse;
const helloBuilder: HelloBuilder = name => ({ 'hello': name });

export const helloHandler = (req: Request, res: Response) => {
    const { params } = req;
    const { name = 'World!' } = params;
    const response = helloBuilder(name);

    return res.json(response);
}

