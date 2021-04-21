import { Router } from 'express'
import { SettingsController } from './controllers/SettingsController'
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

routes.post('/settings', settingsController.create)

export { routes }