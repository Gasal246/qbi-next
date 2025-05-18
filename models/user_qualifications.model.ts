import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IUser_qualifications extends Document {
  _id: ObjectId;
  user_id: ObjectId;
  place: string | null;
  course: string | null;
  start_date: Date | null;
  end_date: Date | null;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const User_qualificationsSchema: Schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  place: { type: String },
  course: { type: String },
  start_date: { type: Date },
  end_date: { type: Date },
  description: { type: String },
}, { timestamps: true });

const User_qualifications = mongoose.models.user_qualifications || mongoose.model<IUser_qualifications>('user_qualifications', User_qualificationsSchema);

export default User_qualifications;

