import items from './item';
import category from './category';
import content from './content';
import telegram from './telegram';

export default {
  createItem: items.CreateItemMutation,
  editItem: items.EditItemMutation,
  removeItem: items.RemoveItemMutation,

  createCategory: category.CreateCategoryMutation,
  editCategory: category.EditCategoryMutation,
  removeCategory: category.RemoveCategoryMutation,

  editContent: content.EditContentMutation,

  sendOrderToTelegram: telegram.SendAnOrderToTelegram,
};
