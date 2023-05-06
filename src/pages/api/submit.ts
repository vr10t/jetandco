import jwt from "jsonwebtoken";
import { type NextApiRequest, type NextApiResponse } from "next";
import { env } from "~/env.mjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = {
    id: env.AUTH_USER_ID,
    email: env.AUTH_USER_EMAIL,
  };

  const token = jwt.sign(user, env.JWT_SECRET, { expiresIn: "1h" });

  const apiUrl = `${env.API_URL}/jetandco`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: req.body as string,
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await (response.json() as Promise<{ message: string }>);
    console.log("Protected route response:", data);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error sending data to protected route:", error);
    res.status(500).json({ message: (error as Error).message });
  }
}

