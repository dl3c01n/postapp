import express, { Response, Request } from 'express'
const { Router } = express

export const errorRoute = Router().get('*', (_, res: Response) => {
    res.status(404).send("ERREUR 404, LA PAGE QUE VOUS DEMANDEZ N'EST PAS TROUVÉE")
})