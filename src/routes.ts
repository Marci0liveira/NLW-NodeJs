import { Router } from 'express'
import { MessagesController } from './controllers/MessagesController';
import { SettingsController } from './controllers/SettingsController'
import { UsersController } from './controllers/UsersController';
import { Setting } from './entities/setting';

const routes = Router()

/**
 * Tipos de Parametros:
 * 
 * Routes params => Parametros de rota
 * http://localhost:3333/settings/1
 * 
 * Query params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body params => um objeto tipicamente JSON => {
 * 
 * }
 */

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController()

routes.post('/settings', settingsController.create)
routes.get('/settings/:username', settingsController.findByUsername)
routes.put('/settings/:username', settingsController.update)

routes.post('/users', usersController.create)

routes.post('/messages', messagesController.create)
routes.get('/messages/:id', messagesController.showByUser)

export { routes }