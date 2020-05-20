import AuthService from '../src/services/auth';
import { IUserInputDTO } from '../src/interfaces/IUser';
import faker from 'faker';
import mongoose from 'mongoose';
import logger from '../src/loaders/logger';

import request from 'supertest';
import express from 'express';

let expressApp = null;

beforeAll(async (done) => {
  expressApp = express();
  try {
    await require('../src/loaders').default({ expressApp });
  } catch (e) {
    console.log(e);
  }
  done();
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});

describe('User service', () => {
  describe('SignUp new user', () => {
    it('When email is already taken, then it throws appropriate error object', async () => {});
    it('When everything is ok, then it returns userDTO and a token', () => {});
  });
  describe('SignIn user', () => {
    it("When email doesn't exists, then it throws appropriate error object", () => {});
    it("When email and password don't match, then it throws appropriate error object", () => {});
    it('When email and password match, then it returns a userDTO and a token', () => {});
  });
});
