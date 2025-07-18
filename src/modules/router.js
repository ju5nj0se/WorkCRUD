import { home } from "./home.js";
import { loginEmploye } from "./loginEmployee.js";
import {registerEmploye} from './registerEmploye.js'
import { loginCompany } from "./loginCompany.js";
import { registerCompany } from "./registerCompany.js";
import { newVacancy } from "./dashboard/newVacancy.js";


export const router = {
  'url': 'http://localhost:3000',
  '#/home': home,
  '#/loginEmploye': loginEmploye,
  '#/loginCompany': loginCompany,
  '#/registerCompany':  registerCompany,
  '#/registerEmploye': registerEmploye,
  "#/newVacancy":newVacancy
};