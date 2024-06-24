const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dog.dog', ({ strapi }) => ({
  
  
  async create(ctx) {
    
    
    const user = ctx.state.user;
   

    ctx.request.body.data.users_permissions_user = user.id;

    const response = await super.create(ctx);

    const updated = await strapi.entityService.update("api::dog.dog", response.data.id, {
      data: {
          users_permissions_user: user.id
      }
  });

    return response;
  },

  async find(ctx){
    const user = ctx.state.user;

    ctx.query.filters = {
        ...(ctx.query.filters || {}),
        users_permissions_user: user.id
    };

    return super.find(ctx);
},


async findOne(ctx){
  const user = ctx.state.user;

  ctx.query.filters = {
      ...(ctx.query.filters || {}),
      users_permissions_user: user.id
  };

  return super.find(ctx);
},

async update(ctx){
  const user = ctx.state.user;

  ctx.query.filters = {
      ...(ctx.query.filters || {}),
      users_permissions_user: user.id
  };

  return super.find(ctx);
},

async delete(ctx){
  const user = ctx.state.user;

  ctx.query.filters = {
      ...(ctx.query.filters || {}),
      users_permissions_user: user.id
  };

  return super.find(ctx);
},

}));
