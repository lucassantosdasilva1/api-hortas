/**
 * @swagger
 * tags:
 *   name: Leituras
 *   description: API para gerenciamento de informações da horta
 */

/**
 * @swagger
 * /api-hortas/leituras:
 *   get:
 *     summary: Retorna uma lista de leituras
 *     tags: [Leituras]
 *     responses:
 *       200:
 *         description: Lista de leituras retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 * /api-hortas/createLeitura:
 *   post:
 *     summary: Cria uma nova leitura
 *     tags: [Leituras]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                temperaturaSolo:
 *                  type: number
 *                  default: 0
 *                temperaturaAmbiente:
 *                  type: number
 *                  default: 0
 *                umidadeAtmosfera:
 *                  type: number
 *                  default: 0
 *                umidadeSolo:
 *                  type: number
 *                  default: 0
 *                phSolo:
 *                  type: number
 *                  default: 0
 *                condutividadeEletricaSolo:
 *                  type: number
 *                  default: 0
 *                luminosidade:
 *                  type: number
 *                  default: 0
 *      
 *     responses:
 *       200:
 *         description: Transação criada com sucesso
 *       400:
 *         description: Erro de validação dos dados
 *       500:
 *         description: Erro interno do servidor
 *
 * /api-hortas/deleteLeitura/{id}:
 *   delete:
 *     summary: Exclui uma leitura pelo ID
 *     tags: [Leituras]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID da leitura
 *     responses:
 *       200:
 *         description: leitura excluida com sucesso
 *       404:
 *         description: leitrura não encontrada
 *       500:
 *         description: Erro interno do servidor
*/