class CreateUserPacks < ActiveRecord::Migration[5.2]
  def change
    create_table :user_packs do |t|
      t.integer :user_id, null: false
      t.integer :pack_id, null: false
      t.timestamps
    end
    add_index :user_packs, [:pack_id, :user_id], unique: true
  end
end
