class EditColumnsInPacksTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :packs, :category
    add_column :packs, :category_id, :integer, null: false
    add_column :categories, :created_at, :datetime, null: false
    add_column :categories, :updated_at, :datetime, null: false
  end
end
