// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {   // eslint-disable-line no-undef
  imports: object // eslint-disable-line no-undef
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const imports:Data = {
    imports: {
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
      "@single-spa/welcome": "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
      
    }
  }

  res.status(200).json(imports)
}
