import mongoose from 'mongoose';

mongoose.set('strictQuery',true);

const connectToDb = async () => {
    try {

        const {connection} = await mongoose.connect( process.env.MONGO_URI);
        if(connection){
            // eslint-disable-next-line no-console
            console.log(`connected to mongoDb${connection.host} port${connection.port} and connection name ${connection.name}`);
        }
        return connection;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error while connecting to db',error);
        process.exit(1);
    }

};

export default connectToDb;