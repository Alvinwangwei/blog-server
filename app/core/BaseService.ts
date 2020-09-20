const Service = require('egg').Service

class BaseMongooseService extends Service {
  get document() {
    throw Error ("userService need override property <document>'s get method!")
  }

  async page (option, next, limit, includs, sort) {
    limit = limit || 50
    const findLimit = limit + 1
    const projection = {}
    if(includs && includs instanceof Array) {
      includs.forEach(item => {
        projection[item] = 1
      })
    }
    if(next) {
      option._id = {$lte: next}
    }

     const sortPrama = (sort ? sort : { _id: -1 });

    const data = await (this.document as any)
      .find(option, projection).skip((next - 1)*limit)
      .sort(sortPrama)
      .limit(findLimit)
    if(data.length === findLimit) {
      return { next: data.pop()._id, data, total: data.length }
    }
    return { data, total: data.length }
  }

  async pageList(option, next, limit, includs, sort) {
    limit = limit || 50
    next = parseInt(next) || 1
    const projection = {}
    if(includs && includs instanceof Array) {
      includs.forEach(item => {
        projection[item] = 1
      })
    }
    if(sort) {
      throw Error('sort is not find '); 
    }

    const data = await (this.document as any)
      .find(option, projection).skip((next - 1) * limit)
      .sort(sort)
      .limit(limit)
      return { next: (next + 1), data, total: data.length };
  }

  async find(option, includs) {
    const projection = {}
    if(includs && includs instanceof Array) {
      includs.forEach(item => {
        projection[item] = 1
      })
    }
    return await (this.document as any)
      .find(option, projection)
  }

  async findById(_id, includs)  {
    return await (this.document as any)
      .findOne({ _id }, includs)
  }

  async findOne(option, includs) {
    const projection = {}
    if(includs && includs instanceof Array) {
      includs.forEach(item => {
        projection[item] = 1
      })
    }
    await (this.document as any)
      .findOne(option, projection).orFail()
  }

  async create(detail) {
    const now = new Date().getTime()
    const _create = {
      create_stamp: now,
      update_stamp: now
    }
    return await new (this.document as any)(Object.assign(_create, detail)).save()
  }

  async update(option, detail) {
    const now = new Date().getTime()
    const _updated = {
      update_stamp: now
    }
    return await (this.document as any)
      .updateOne(option, Object.assign(_updated, detail))
      .orFail()
  }

  async updateById(_id, detail) {
    return await this.update({ _id }, detail)
  }
}

module.exports = BaseMongooseService