import {User} from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/authToken.js";

export const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all fields."});
        }

        const user = await User.findOne({email});
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this email."});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({name, email, password: hashedPassword});
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User registered successfully."});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error."});
    }
};

export const login = async (req, res) => {
    try {
       const {email, password} = req.body; 
         if (!email || !password) {
              return res.status(400).json({
                success: false,
                message: "Please fill in all fields."});
         }
            const user = await User.findOne({email});
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid credentials."});
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid credentials."});
            }
            generateToken(res,user,`Welcome back ${user.name}!`);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error."});
    }
};

export const logout = async (req, res) => {
    try {

        res.status(200).cookie("token", null, {maxAge: 0}).json({
            success: true,
            message: "Logged out successfully."});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error."});
    }
}

export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."});
        }
        res.status(200).json({
            success: true,
            user});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error."});
    }
}