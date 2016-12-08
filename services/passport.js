const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const User = require('../models/UserModel');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');
