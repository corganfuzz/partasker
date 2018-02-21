import { uniqueId } from '../actions';

const mockTasks =
[
  {
    id: uniqueId(),
    title: 'Learning Linux',
    description: 'the store, actions, and linux',
    status: 'In Progress',
  },
  {
    id: uniqueId(),
    title: 'Peace of mind',
    description: 'No Biggie',
    status: 'In Progress',
  },
];

export default function tasks (state = {tasks: mockTasks}, action) {

  if (action.type === 'CREATE_TASK') {
    return {
      tasks: state.tasks.concat(action.payload)
    };
  }

  if (action.type === 'EDIT TASK') {
    const { payload } = action;
      return {
        tasks: state.tasks.map(task => {

          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }

          return task;
        }),
      };
  }
  return state;
}
