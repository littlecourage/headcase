class CreatePacks < ActiveRecord::Migration[5.2]
  def change
    create_table :packs do |t|
      t.string :title, null: false
      t.string :category, null: false
      
      t.timestamps
    end
    add_index :packs, :title, unique: true
  end
end
