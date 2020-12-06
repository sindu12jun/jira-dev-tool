import { rest } from 'msw'
import { kanbanDB, taskDB } from '../data/rest'

const apiUrl = process.env.REACT_APP_API_URL;
export const reorderHandlers = [
  rest.post(`${apiUrl}/kanbans/reorder`, async (req, res, ctx) => {
    const { fromId, referenceId, type } = req.body;
    await kanbanDB.reorder({ fromId, referenceId, type });
    return res(ctx.json({}));
  }),
  rest.post(`${apiUrl}/tasks/reorder`, async (req, res, ctx) => {
    const {
      type,
      fromId: fromTaskId,
      referenceId,
      fromKanbanId,
      toKanbanId,
    } = req.body;
    if (fromKanbanId !== toKanbanId) {
      await taskDB.update(fromTaskId, { kanbanId: toKanbanId });
    }
    await taskDB.reorder({ type, fromId: fromTaskId, referenceId });
    return res(ctx.json({}));
  }),
];
