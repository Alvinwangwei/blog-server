module.exports = (app: any) => {
  const { mongoose } = app;
  return mongoose.model('User', 
    new mongoose.Schema({
      user_id: { type: String, unique: true },
      user_name: { type: String },
      age: { type: Number },
      description: { type: String },
      status: { type: Number },
    }), 
    'user'
  );
}