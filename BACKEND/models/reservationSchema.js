import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First name must contain at least 3 Characters"],
        maxLenth:[30,"First name cannat exceed 30 characters"],

    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last name must contain at least 3 Characters"],
        maxLenth:[30,"Last name cannat exceed 30 characters"],

    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please enter a valid email"],
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone number must contain only 10 digits"],
        maxLenth:[10,"Phone number must contain only 10 digits"],
        
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    
    },

});

export const Reservation=mongoose.model("Reservation",reservationSchema);