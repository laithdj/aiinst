import mongoose from 'mongoose';
import logger from './logger';

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri || mongoUri === '') {
      logger.warn('MongoDB URI not provided. Skipping database connection.');
      return;
    }
    
    await mongoose.connect(mongoUri, {
      // These options are no longer necessary
    });
    logger.info('MongoDB connected');
  } catch (error) {
    logger.warn('MongoDB connection failed. Application will continue without database:', error);
    // Don't exit the process, just log the warning
  }
};
