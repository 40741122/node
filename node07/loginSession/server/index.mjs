import express from 'express';
import cors from 'cors';
import multer from 'multer';
import session from 'express-session';

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

const users = {
	user1: {
		pwd: '12345',
		img: 'https://randomuser.me/api/portraits/women/48.jpg',
		name: 'Michelle Dunn',
	},
	user2: {
		pwd: '12345',
		img: 'https://randomuser.me/api/portraits/women/96.jpg',
		name: 'Isabella Stone',
	},
};

console.log(users);

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
	secret: 'mySecretKey',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 1200000,
	},
}));

app.get('/', (req, res) => {
	res.send('首頁');
});

app.post('/', upload.none(), (req, res) => {
	const {userID, userPWD} = req.body;
	if (users[userID] && users[userID].pwd === userPWD) {
		const {pwd, ...user} = users[userID];
		user.id = userID;
		req.session.user = user;
		res.json({message: 'welcome', user});
	} else {
		res.json({message: 'faild'});
	}
});

app.get('/checkLogin', (req, res) => {
	const {user} = req.session;
	res.json({message: 'welcome', user});
});

app.get('/logout', (req, res) => {
	delete req.session.user;
	res.json({message: 'logout'});
});

app.listen(3000, () => {
	console.log('running at http:/localhost:3000');
});
