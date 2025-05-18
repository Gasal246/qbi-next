import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IUsers extends Document {
  _id: ObjectId;
  name: string | null;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const UsersSchema: Schema = new Schema({
  name: { type: String },
  phone: { type: String },
  whatsapp: { type: String },
  email: { type: String },
}, { timestamps: true });

const Users = mongoose.models.users || mongoose.model<IUsers>('users', UsersSchema);

export default Users;

