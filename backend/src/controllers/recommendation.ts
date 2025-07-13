// backend/src/controllers/recommendation.ts
import { Request, Response } from 'express'
import { getRecommendation } from '../services/recommendationService'
import pool from '../db/pool'  // pg Pool instance
import { SQL } from 'sql-template-strings'

export async function recommend(req: Request, res: Response) {
  const { age, income, dependents, risk } = req.body
  const { plan, explanation } = getRecommendation({ age, income, dependents, risk })

  // persist
  await pool.query(
   SQL`
      INSERT INTO 
      submissions (age,income,dependents,risk,recommended_plan,explanation)
      VALUES (${age}, ${income}, ${dependents}, ${risk}, ${plan}, ${explanation})
      RETURNING *
   `
  )

  res.json({ plan, explanation })
}
