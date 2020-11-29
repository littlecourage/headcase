class AddColumnToUserPacks < ActiveRecord::Migration[5.2]
  def change
    add_column :user_packs, :current_med_no, :integer, null: false, default: 1
  end
end
