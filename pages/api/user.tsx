import { NextApiRequest, NextApiResponse } from 'next'; 
import connect from '../../utils/database'

interface ResponseType {
    message: string;
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
): Promise<void> => {
    try {
    const { db } = await connect();

    const response = await db.collection('users').insertOne({
        name: 'Bruno Gelo'
    });

    res.status(200).json(response.ops[0]);
    }
    catch (ex)
    {
        res.status(400).json(ex);
    }
};