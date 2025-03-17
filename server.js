import express from 'express';
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
res.send('Welocme to our API');
});
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
app.get('/users', (req, res) => {
const users = [
 { id: 1, name: 'John Doe' },
 { id: 2, name: 'Jane Smith' },
 ];
res.json(users);
});

app.use(express.json());

app.post('/users', (req, res) => {
const newUser = req.body;
console.log(newUser);
res.json({ message: 'User added successfull!', user: newUser });
});
