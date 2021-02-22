import { articles, IArticleType } from '../../../data'
import { NextApiRequest, NextApiResponse } from 'next'

interface IMessage {
  message: string;
}

export default function handler({ query: { id } }: NextApiRequest, res: NextApiResponse<IArticleType | IMessage>) {
  const filtered = articles.filter((article) => article.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` })
  }
}