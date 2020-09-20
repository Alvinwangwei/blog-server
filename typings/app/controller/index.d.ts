// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUserController from '../../../app/controller/UserController';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    userController: ExportUserController;
    home: ExportHome;
  }
}
