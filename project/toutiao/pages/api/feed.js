// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import item from './item'

export default (req, res) => {
  res.status(200).json(item)
}
