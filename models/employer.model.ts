import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IEmployers extends Document {
  _id: ObjectId;
  name: string | null;
  phone: string | null;
  designation: string | null;
  company_name: string | null;
  company_address: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const EmployersSchema: Schema = new Schema({
  name: { type: String },
  phone: { type: String },
  designation: { type: String },
  company_name: { type: String },
  company_address: { type: String },
}, { timestamps: true });

const Employers = mongoose.models.employers || mongoose.model<IEmployers>('employers', EmployersSchema);

export default Employers;

