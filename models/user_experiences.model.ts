import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IUser_experiences extends Document {
  _id: ObjectId;
  position: string | null;
  start_date: Date | null;
  company: string | null;
  end_date: Date | null;
  description: string | null;
  user_id: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const User_experiencesSchema: Schema = new Schema({
  position: { type: String },
  start_date: { type: Date },
  company: { type: String },
  end_date: { type: Date },
  description: { type: String },
  user_id: { type: Schema.Types.ObjectId, required: true, ref: "users" },
}, { timestamps: true });

const User_experiences = mongoose.models.user_experiences || mongoose.model<IUser_experiences>('user_experiences', User_experiencesSchema);

export default User_experiences;

