import Cors from 'cors';

const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
    origin: 'http://localhost:3000', 
    credentials: true                
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);

    res.json({ message: 'CORS ayarı başarılı!' });
}
