class EditPacks < ActiveRecord::Migration[5.2]
  def change
    add_column :packs, :length, :integer, null: false, default: 0
  end
end
