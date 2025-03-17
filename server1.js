import express from 'express';
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
res.send('Hello, developer!');
});
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
app.get('/greet', (req, res) => {
const greet = [
 { message:'Hello, John! You are 25 years old.' },
 { message: 'Hello, Jane! You are 26 years old.' },
 ];
res.json(greet);
});

app.use(express.json());

app.post('/greet', (req, res) => {
const newUser = req.body;
console.log(newUser);
res.json({ message: 'User added successfull!', user: newUser });
});
