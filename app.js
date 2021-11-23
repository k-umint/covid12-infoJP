const express = require('express');
const request = require('request');

const app = express();
app.use(express.static('web'));

const port = process.env.PORT || 3000;
app.listen(port);

// When user accessed to "/api/v1/prefectures", return infomation of prefectures.
app.get('/api/v1/prefectures', (req, res) => {

    request('https://covid19-japan-web-api.now.sh/api//v1/prefectures', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var prefJson = JSON.parse(body);
            // send each prefectures infomations about covid-19 as json
            res.json(prefJson);
        }
    })

})

// http://localhost:3000/api/v1/:idにアクセスされたときに特定のToDoを返す
app.get('/api/v1/:id', (req, res) => {

    // connection.query('select * from todo_list where id = ?', req.params.id, (error, results, fields) => {
    //     if (error) { console.log(error) }
    //     res.send(results);
    // })
})

// http://localhost:3000/api/v1にデータを送信してきたときにToDoリストに項目を追加する
app.post('/api/v1', (req, res) => {

    // let todo = {
    //     name: req.body.name,
    //     isDone: req.body.isDone
    // }

    // connection.query('insert into todo_list(name,isDone) values(?,?)', [todo.name, todo.isDone], (error, results, fields) => {
    //     if (error) { console.log(error) }
    //     res.send(todo);
    // })
});

//  http://localhost:3000/api/v1/:idにPUTで送信してきたときにチェックの更新
app.put('/api/v1/:id', (req, res) => {

    // connection.query('select * from todo_list', (error, results, fields) => {
    //     connection.query('update todo_list set isDone = ? where id = ?',
    //         [req.body.isDone, req.params.id], (error, results, fields) => {
    //             if (error) { console.log(error) }
    //             res.send(results)
    //         })
    // })
})

//  http://localhost:3000/api/v1/{$:id}にDELETEで送信してきたときに項目を削除する
app.delete('/api/v1/:id', (req, res) => {
    // connection.query('select * from todo_list', (error, results, fields) => {
    //     connection.query('delete from todo_list where id=?', req.params.id, (error, results, fields) => {
    //         if (error) { console.log(error) }
    //         res.send(results)
    //     })
    // })

})

// ポート3000でサーバーを立てる
// app.listen(3000, () => console.log('Listening on port 3000'));


