import express from 'express';
import cors from 'cors';
import multer from 'multer';

const upload = multer();

const whitelist = ['http://localhost:5500', 'http://localhost:3000', 'http://127.0.0.1:5500', undefined];
const corsOptions = {
	credentials: true,
	origin(origin, callback) {
		if (whitelist.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('不允許傳遞資料'));
		}
	},
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.send('首頁');
});

app.post('/', upload.none(), (req, res) => {
	console.log(req.body);
	res.json({message: 'welcome'});
});

app.listen(3000, () => {
	console.log('running at http:/localhost:3000');
});
