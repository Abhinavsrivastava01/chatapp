// import mongoose from 'mongoose';
// const USERNAME=process.env.DB_USERNAME;
// const PASSWORD=process.env.DB_PASSWORD;
// const Connection = async (username, password) => {
//     const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.fd6u9ks.mongodb.net/?retryWrites=true&w=majority`;
//     try {
//         await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
//         console.log('Database Connected Succesfully');
//     } catch(error) {
//         console.log('Error: ', error.message);
//     }

// };

// export default Connection;
import mongoose from 'mongoose';
import dotenv from 'dotenv'
`mongoose.set('strictQuery', true);`

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

async function Connection() {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.fd6u9ks.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error while connecting with the database: ', error.message);
    }

}

export default Connection;