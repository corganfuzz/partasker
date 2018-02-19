import { uniqueId } from '../actions';

const mockTasks =
[
  {
    id: 1,
    title: 'Learning Linux',
    description: 'the store, actions, and linux',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Peace of mind',
    description: 'No Biggie',
    status: 'In Progress',
  },
];

function tasks (state = {tasks: mockTasks}, action) {
  return state
}

export default tasks;
