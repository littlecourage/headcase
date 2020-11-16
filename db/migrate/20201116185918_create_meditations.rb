class CreateMeditations < ActiveRecord::Migration[5.2]
  def change
    create_table :meditations do |t|
      t.integer :order, null: false
      t.integer :pack_id, null: false
      t.integer :audio_id, null: false
      t.timestamps
    end
    add_index :meditations, [:pack_id, :audio_id], unique: true
  end
end
