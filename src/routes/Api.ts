
import { Router } from 'express';
import LoginController from '../controllers/Api/Auth/Login';
import RegisterController from '../controllers/Api/Auth/Register';
import UserController from '../controllers/Api/User';
import CsrfToken from '../middlewares/CsrfToken';

const router = Router();

router.post('/auth/login', LoginController.login);
router.post('/auth/register', RegisterController.register);
router.get('/users', CsrfToken.verifyToken, UserController.getUsers);
router.get('/users/:id', CsrfToken.verifyToken, UserController.detailUser);

export default router;
