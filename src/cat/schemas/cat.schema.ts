import * as mongoose from 'mongoose';

// 创建通用字段-isDelete插件
function softDeletePlugin(schema: mongoose.Schema): void {
  // 添加软删除字段
  schema.add({
    isDeleted: { type: Boolean, default: false }
  });

  // 添加软删除方法
  schema.methods.softDelete = function() {
    this.isDeleted = true;
    return this.save();
  };
}

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
}, {
  timestamps: true
});

CatSchema.plugin(softDeletePlugin); // 使用