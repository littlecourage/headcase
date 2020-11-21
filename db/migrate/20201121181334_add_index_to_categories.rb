class AddIndexToCategories < ActiveRecord::Migration[5.2]
  def change
    add_index :categories, :name, unique: true
  end
end
