import { required, search, ServerError } from '../util'

class Rest {
  storageKey = "";
  list = [];

  get listMap() {
    return this.list.reduce((prev, next) => {
      return { ...prev, [next.id]: next };
    }, {});
  }

  persist = () =>
    window.localStorage.setItem(this.storageKey, JSON.stringify(this.list));

  load = () =>
    (this.list =
      JSON.parse(window.localStorage.getItem(this.storageKey)) || []);

  validateItem = (id) => {
    this.load();
    if (!this.listMap[id]) {
      const error = new ServerError(`No item with the id "${id}"`);
      error.status = 404;
      throw error;
    }
  };

  /**
   *
   * @param fromId
   * @param type 'after'|'before'
   * @param toId
   */
  reorder({ fromId, type, referenceId }) {
    const movingItemIndex = this.list.findIndex((item) => item.id === fromId);
    if (!referenceId) {
      insertAfter(this.list, movingItemIndex, this.list.length - 1);
      this.persist();
      return;
    }
    const targetIndex = this.list.findIndex((item) => item.id === referenceId);
    const insert = type === "after" ? insertAfter : insertBefore;
    insert(this.list, movingItemIndex, targetIndex);
    this.persist();
  }

  push(items) {
    items.forEach((item) => this.create(item));
    this.persist();
  }

  detail = (id) => {
    this.validateItem(id);
    return this.listMap[id];
  };

  remove = (id) => {
    this.validateItem(id);
    const target = this.list.find(item => item.id === id)
    if(!target){
      return
    }
    target.deleted = true
    // this.list = this.list.filter((item) => item.id !== id);
    this.persist();
  };

  update(id, updates) {
    this.validateItem(id);

    const target = this.list.find((item) => item.id === id);
    this.list[this.list.indexOf(target)] = { ...target, ...updates };

    this.persist();
    return this.detail(id);
  }

  create({ name = required("name"), ...rest }) {
    const ids = Object.keys(this.listMap).map(Number);
    const id = Math.max(...ids, 0) + 1;
    const newItem = { ...rest, name, id };
    this.list.push(newItem);
    this.persist();
    return this.detail(id);
  }

  query(param) {
    return search(this.list, param).filter(item => !item.deleted);
  }

  queryByOwnerId(userId, param) {
    return this.query(param).filter((item) =>
      "ownerId" in item ? item["ownerId"] === userId : true
    );
  }

  constructor(storageKey) {
    this.storageKey = storageKey;
    try {
      this.load();
    } catch (error) {
      this.persist();
    }
  }
}

export const projectDB = new Rest("__jira__project");
export const epicDB = new Rest("__jira__epic");
export const taskDB = new Rest("__jira__task");
export const kanbanDB = new Rest("__jira__kanban");
export const userDB = new Rest("__jira__user");
export const taskTypeDB = new Rest("__jira__task__type");
export const tagDB = new Rest("__jira__tag__");

const insertBefore = (list, from, to) => {
  const toItem = list[to];
  const removedItem = list.splice(from, 1)[0];
  const toIndex = list.indexOf(toItem);
  list.splice(toIndex, 0, removedItem);
  return list;
};

const insertAfter = (list, from, to) => {
  const toItem = list[to];
  const removedItem = list.splice(from, 1)[0];
  const toIndex = list.indexOf(toItem);
  list.splice(toIndex + 1, 0, removedItem);
  return list;
};
