const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { boolean } = require("joi");
 
const remindershema = mongoose.Schema(
	{
        
		createdby:{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
            required: true
		},
		selectedDate: {
			type: String,
			require: true
		},
		selectedSubject: {
			type: String,
			require: true
		},
		description: {
			type: String,
			require: true
		},
		emailAddress: {
			type: String,
            default:""
		},
		contactNo: {
			type: Number,
            default:""

		},
		smsNo: {
			type: Number,
            default:""
		},
		recurringDays: {
			type: {
			  '7 Days': Boolean,
			  '5 Days': Boolean,
			  '3 Days': Boolean,
			  '2 Days': Boolean
			},
			default: {
			  '7 Days': false,
			  '5 Days': false,
			  '3 Days': false,
			  '2 Days': false
			}
		  }
	}
)

const Reminder= mongoose.model("Reminder", remindershema );
module.exports =Reminder;
