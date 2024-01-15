import express from 'express';
import moment from 'moment';
import connection from '../db.mjs';
import multer from 'multer';

// eslint-disable-next-line new-cap
const router = express.Router();
const upload = multer();

/* GET users listing. */
router.get('/', (req, res) => {
	// Res.send('導向有今天日期的網址');
	const time = moment().format('YYYY-MM-DD');
	res.redirect('/expense/d/' + time);
});

router.get('/d/:date', async (req, res) => {
	// Res.send('讀取指定日期的消費');
	const {date} = req.params;

	const sort = await getSort().then(data => data.sort).catch(() => undefined);

	const dateData = await getDateData(date).then(data => data).catch(() => {});

	if (sort && dateData) {
		res.render('index', {date, sort, dateData});
	} else {
		res.send('發生錯誤');
	}
});

router.post('/', (req, res) => {
	const {title} = req.body;
	const sort = parseInt(req.body.sort, 10);
	const money = parseInt(req.body.money, 10);
	const {date} = req.body;
	connection.execute(
		'INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?);',
		[title, sort, money, date],
		() => {
			res.redirect('/expense/d/' + date);
		},
	);

	// Res.send('新增指定日期的消費');
});

router.put('/', upload.none(), async (req, res) => {
	// Res.send('修改指定日期的消費');
	const aaaa = await updateData(req.body).then(() => 1).catch(() => 0);
	res.json({aaaa});
});

router.delete('/', upload.none(), async (req, res) => {
	// Res.send("刪除指定日期的消費")
	const aaaa = await deleteData(req.body).then(() => 1).catch(() => 0);
	res.json({aaaa});
});

function getSort() {
	return new Promise((resolve, reject) => {
		connection.query(
			'SELECT * FROM `sort`',
			(error, results) => {
				if (error) {
					// eslint-disable-next-line prefer-promise-reject-errors
					reject({error});
					return false;
				}

				const sort = results.map(item => ({id: item.id, name: item.name}));
				resolve({sort});
			},
		);
	});
}

function getDateData(date) {
	return new Promise((resolve, reject) => {
		connection.execute(
			'SELECT * FROM `expense` WHERE `date` = ?',
			[date],
			(error, results) => {
				if (error) {
					reject(error);
					return false;
				}

				resolve(results);
			},
		);
	});
}

function updateData(data) {
	return new Promise((resolve, reject) => {
		const {title} = data;
		const sort = parseInt(data.sort, 10);
		const money = parseInt(data.money, 10);
		const {date} = data;
		const id = parseInt(data.id, 10);
		connection.execute(
			'UPDATE `expense` SET `title` = ?, `sort` = ?, `money` = ?,	`date` = ? WHERE `expense`.`id` = ?;',
			[title, sort, money, date, id],
			((error, results) => {
				if (error) {
					reject(error);
					return false;
				}

				resolve(results);
			}),
		);
	});
}

function deleteData(data) {
	return new Promise((resolve, reject) => {
		const id = parseInt(data.id, 10);
		connection.execute(
			'DELETE FROM expense WHERE `expense`.`id` = ?;',
			[id],
			((error, results) => {
				if (error) {
					reject(error);
					return false;
				}

				resolve(results);
			}),
		);
	});
}

export default router;
