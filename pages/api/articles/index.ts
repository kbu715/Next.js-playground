import { articles, IArticleType } from '../../../data';
import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse<IArticleType[]>) {
  res.status(200).json(articles);
}
