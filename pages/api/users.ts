import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const users = await prisma.user.findMany();
        return res.status(200).json({ data: { users } });
    }

    if (req.method === 'POST') {
        const { name, email } = req.body;
        const newUser = await prisma.user.create({
            data: { name, email },
        });
        return res.status(201).json(newUser);
    }
}

